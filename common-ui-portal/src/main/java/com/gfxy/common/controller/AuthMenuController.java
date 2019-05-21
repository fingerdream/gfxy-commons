package com.gfxy.common.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.gfxy.common.portal.entity.AppButton;
import com.gfxy.common.portal.service.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * @author: lijixin 2019-05-21
 */
@Controller
@RequestMapping("/authMenu")
public class AuthMenuController {

    private static final Logger logger = LoggerFactory.getLogger(AuthMenuController.class);

    @Autowired
    private RoleService roleService;

    @RequestMapping("/getMenuAuth")
    public String getMenuAuth(HttpServletRequest request) {
        String userName = request.getSession().getAttribute("userName").toString();
        String menuId = request.getParameter("menuId");
        logger.info("准备验证用户[{}]在菜单标识[{}]下的权限", userName, menuId);
        //验证当前用户的菜单权限以及按钮权限

        Map<String,Object> menuAuth = roleService.getMenuAuth(menuId,userName);
        if(menuAuth.get("isPageAuth").toString().equals("0")){
            //没有菜单权限
            logger.info("用户[{}]在菜单[{}]下没有权限", userName, menuId);
            return "base/error/noPage";
        } else {
            String openUrl = (String)menuAuth.get("openUrl");
            String btnAuth = (String)menuAuth.get("btns");
            if (btnAuth.equals("all")) {
                Map<String, Object> btnMap = new HashMap<>();
                request.setAttribute("_btnAuth",btnAuth);
                request.setAttribute("_btnMap",btnMap);
                return "forward:/"+openUrl;
            } else {
                Map<String, Object> btnMap = new HashMap<>();
                List<AppButton> list = (List<AppButton>)menuAuth.get("btnList");
                for(AppButton appButton : list){
                    btnMap.put(appButton.getBtnId(),1);
                    btnMap.put(appButton.getBtnId()+"__name",appButton.getBtnName());
                }
                return "forward:/"+openUrl;
            }
        }
    }

    @RequestMapping(value = "/helpPage",method = RequestMethod.GET)
    public @ResponseBody
    String helpPage(HttpServletRequest request){
//        String menuId = request.getParameter("menuId");
//        JSONObject mm = new JSONObject();
//        mm.put("id", menuId);
//        JSONObject jsonObject = CommonRestUtil.doRest("menuMgr/getMenuById", PORTAL_WEB_SERVER, mm, ERestType.GET, logger, "获取菜单对象",request);
//        if(jsonObject.getBoolean("success")){
//            String url = jsonObject.getJSONObject("message").optString("url");
//            url = (url.substring(0,url.indexOf("."))).replace("/","_");
//            return url;
//        } else {
//            return "error";
//        }
        return null;
    }

    @RequestMapping(value = "/showMD",method = RequestMethod.GET)
    public String showMD(HttpServletRequest request){
        request.setAttribute("mdName",request.getParameter("mdName"));
        return "base/portal/showMD";
    }
}
