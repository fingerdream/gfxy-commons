package com.gfxy.common.controller;


import com.alibaba.fastjson.JSONObject;
import com.gfxy.common.login.LoginMessage;
import com.gfxy.common.portal.entity.Staff;
import com.gfxy.common.portal.entity.User;
import com.gfxy.common.portal.service.StaffService;
import com.gfxy.common.portal.service.UserService;
import com.gfxy.common.util.AcquireClientIp;
import com.gfxy.common.util.CodeUtil;
import com.gfxy.common.util.HttpUtil;
import com.gfxy.common.util.RsaUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;


/**
 * <p>Class: LoginController </p>
 * <p>Description: 登陆模块</p>
 */
@Controller
@RequestMapping("/login")
public class LoginController {
    
    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private StaffService staffService;

    @RequestMapping("")
    public String handleRequest(HttpServletRequest request){
        return "base/portal/login";
    }

    @RequestMapping("appraise")
    public String handleAppraise(HttpServletRequest request){
        return "base/portal/appraise";
    }


    @RequestMapping(value = "/getCode",method = RequestMethod.GET)
    public void createCodeImg(HttpServletRequest request,HttpServletResponse response) throws UnsupportedEncodingException {
        HttpSession session= request.getSession();
        RsaUtils rsaUtils=(RsaUtils) session.getAttribute("_RSAUtil");
        if(rsaUtils==null) {
            rsaUtils=new RsaUtils();
        }
        rsaUtils.initKey();
        session.setAttribute("_RSAUtil", rsaUtils);
        
        Cookie cookie=new Cookie("encryptToken",URLEncoder.encode(rsaUtils.generateBase64PublicKey(),"UTF-8"));
        cookie.setMaxAge(5000*60);
        cookie.setPath("/");
        String code= CodeUtil.createCode();
        session.setAttribute("lopginCode", code);
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        response.addCookie(cookie);
        response.setContentType("image/jpeg");
        try {
            CodeUtil.writeIcon(response.getOutputStream(),code);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            try {
                response.getOutputStream().close();
            } catch (IOException e) {
            }
        }
    }
    
    @RequestMapping(value = "/getEncryptKey", method = RequestMethod.GET)
    public @ResponseBody
    JSONObject getEncryptKey(HttpServletRequest request, HttpServletResponse response)
            throws UnsupportedEncodingException {
        HttpSession session = request.getSession();
        RsaUtils rsaUtils = (RsaUtils) session.getAttribute("_RSAUtil");
        if (rsaUtils == null) {
            rsaUtils = new RsaUtils();
        }
        rsaUtils.initKey();
        session.setAttribute("_userRSAUtil", rsaUtils);
        JSONObject mm = new JSONObject();
        mm.put("encryptKey", rsaUtils.generateBase64PublicKey());
        return mm;
    }

    /**
     * 用户登录
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/loginUser",method = RequestMethod.POST)
    public @ResponseBody LoginMessage loginUser(HttpServletRequest request,HttpServletResponse response){

        String password = request.getParameter("password");
        String username = request.getParameter("username");
        logger.info("user :" + username + " is logining");
        String clientip = getRemortIP(request);
        String checkCode = request.getParameter("checkCode");
        HttpSession session= request.getSession();
        
        String lopginCode=(String) session.getAttribute("lopginCode");
        if (lopginCode == null || checkCode == null || lopginCode.isEmpty() || checkCode.isEmpty()
                || !lopginCode.equalsIgnoreCase(checkCode)) {
            logger.error("user : " + username + " 登录时验证码输入错误： [" + lopginCode + "-" + checkCode);
            JSONObject rtM = new JSONObject();
            rtM.put("success", false);
            rtM.put("flag", false);
            rtM.put("errorMsg", "验证码错误！");
            LoginMessage loginMessage = new LoginMessage(1,"验证码错误");
            return loginMessage;
        }
        
        RsaUtils rsaUtils=(RsaUtils) session.getAttribute("_RSAUtil");
        password=rsaUtils.decryptBase64(password);
        
//        JSONObject mm = new JSONObject();
//        mm.accumulate("password", password);
//        mm.accumulate("username", username);
//        mm.accumulate("clientip", clientip);



        List<User> users = userService.findUserByLoginName(username);


        LoginMessage result = new LoginMessage();
        if(users!=null && users.size()==1){
            User user = users.get(0);
            if(password!=null && password.equals(user.getPassword())){
                //登录成功
                session.invalidate();//清空缓存
                request.getSession().setAttribute("userName", user.getLoginName());
                request.getSession().setAttribute("userId", user.getUserId());

                //toDo
                Staff staff = staffService.getStaffById(user.getStaffId());

                request.getSession().setAttribute("userCnName", staff.getName());
                result.setFlag(0);
                result.setMessage("登录成功");

            } else {
                //密码错误
                result.setFlag(1);
                result.setMessage("密码错误");
            }

        } else {
           //用户不存在
            result.setFlag(1);
            result.setMessage("用户不存在");
        }

        HttpUtil.clearCookie(request.getCookies(),response);//清除登陆加密token
        return result;
    }

    /**
     * <p>Method: logout </p>
     * <p>Description: 退出</p>
     * <p>date: 2017/10/17 12:47 </p>
     * @author zhuyu[zhuyu@boco.com.cn]
     */
    @RequestMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject mm = new JSONObject();
        mm.put("username", request.getSession().getAttribute("userName"));
        mm.put("clientip", getRemortIP(request));
//        CommonRestUtil.doRest("iLoginServer/logout", PORTAL_WEB_SERVER, mm, ERestType.POST, logger, "退出",request);
        request.getSession().removeAttribute("userName");
        request.getSession().removeAttribute("userId");
        request.getSession().removeAttribute("orgId");
        request.getSession().removeAttribute("orgName");
        request.getSession().removeAttribute("userCnName");
        request.getSession().removeAttribute("roleIds");
        request.getSession().removeAttribute("systemIds");
        for (Cookie coo : request.getCookies()) {
            if ("_myToken".equals(coo.getName())) {
                coo.setMaxAge(0);//清空cookie
                response.addCookie(coo);
                break;
            }
        }
        request.getRequestDispatcher("/login").forward(request, response);
    }

    /**
     * <p>Method: getRemortIP </p>
     * <p>Description: 获取客户端ip</p>
     * <p>date: 2018/4/12 13:54 </p>
     * @author zhuyu[zhuyu@boco.com.cn]
     */
    private String getRemortIP(HttpServletRequest request) {
        if (request.getHeader("x-forwarded-for") == null) {
            return AcquireClientIp.getIpAddr(request);
        }
        return request.getHeader("x-forwarded-for");
    }

}
