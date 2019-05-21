package com.gfxy.common.controller;

import com.alibaba.fastjson.JSONObject;
import com.gfxy.common.portal.entity.AppTree;
import com.gfxy.common.portal.service.AppTreeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author: lijixin 2019-05-12
 */
@Controller
@RequestMapping("")
public class IndexController {
    private static Logger logger = LoggerFactory.getLogger(IndexController.class);

    @Autowired
    private AppTreeService appTreeService;

    @RequestMapping("")
    public String handleRequest(HttpServletRequest request){
//        String systemIds = "";
//        if (request.getSession().getAttribute("systemIds") == null) {
//            JSONObject maam = new JSONObject();
//            JSONObject roleMsg = CommonRestUtil.doRest("roleInfo/roleInfo", PORTAL_WEB_SERVER, maam, ERestType.GET, logger, "查询角色信息", request);
//            if (roleMsg.getBoolean("success")) {
//                JSONObject jsonObject = roleMsg.getJSONObject("message");
//                request.getSession().setAttribute("roleIds", jsonObject.getString("roleIds"));
//                request.getSession().setAttribute("roleNames", jsonObject.getString("roleNames"));
//                request.getSession().setAttribute("systemIds", jsonObject.getString("systemIds"));
//            }
//        }
//        systemIds = (String) request.getSession().getAttribute("systemIds");
//        JSONObject mm = new JSONObject();
//        mm.put("ids",systemIds);
//        JSONObject treeMsg = CommonRestUtil.doRest("menuMgr/getMenuByIds", PORTAL_WEB_SERVER, mm, ERestType.GET, logger, "查询菜单信息", request);
//        if(treeMsg.getBoolean("success")){
//            request.setAttribute("systemIdList",treeMsg.getJSONArray("message"));
//        }else{
//            request.setAttribute("systemIdList",new ArrayList<>());
//        }
        return "base/portal/index";
    }

    /**
     * 获取用户显示信息
     * @param request
     * @return
     */
    @RequestMapping(value = "/index/getUserShow", method = RequestMethod.GET)
    public @ResponseBody
    JSONObject getUserShow(HttpServletRequest request) {

        String loginUserName = (String) request.getSession().getAttribute("userName");
        JSONObject result = new JSONObject();
        result.put("sideUserName", loginUserName);
        result.put("topUserName", request.getSession().getAttribute("userCnName"));
//        result.accumulate("sideUserDep",request.getSession().getAttribute("orgName"));
        result.put("myLogo", "");
        logger.info("获取用户信息：{}", result);
        return result;
    }

    @RequestMapping(value = "/index/getPortalTopMenu", method = RequestMethod.GET)
    public @ResponseBody
    List<AppTree> getPortalTopMenu(HttpServletRequest request) {

        return appTreeService.getTopAppTree();
    }

    @RequestMapping(value = "/index/getMenuTreeData", method = RequestMethod.GET)
    public @ResponseBody
    Iterable<AppTree> getMemuTreeData(HttpServletRequest request) {
        String menuParentId = request.getParameter("menuParentId");
        String userName= (String) request.getSession().getAttribute("userName");

        logger.info("开始查询 menuParentId 为：[" + menuParentId + "] 的菜单树,userName 为：[" + userName + "]");


        return appTreeService.getAppTreeByParentIdForMenu(menuParentId,userName);
    }
}
