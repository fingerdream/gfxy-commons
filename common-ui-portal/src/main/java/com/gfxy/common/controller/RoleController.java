package com.gfxy.common.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gfxy.common.portal.entity.AppTree;
import com.gfxy.common.portal.entity.Role;
import com.gfxy.common.portal.service.AppTreeService;
import com.gfxy.common.portal.service.RoleService;
import com.gfxy.commons.message.Message;
import com.gfxy.commons.message.MessageUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/roleInfo")
public class RoleController {

    private Logger logger = LoggerFactory.getLogger(RoleController.class);

    @Autowired
    private RoleService roleService;
    @Autowired
    private AppTreeService appTreeService;

    @RequestMapping("/index.action")
    public String handleRequest(HttpServletRequest request){
        Iterable<AppTree> topMenu = appTreeService.getTopAppTree();
        JSONArray systemArr = JSONArray.parseArray(JSON.toJSONString(topMenu));
        request.setAttribute("systemArr",systemArr);
        return "base/system/roleInfo";
    }

    @RequestMapping(value = "/getRoleInfoDatas" ,method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Role> getRoleInfoDatas(HttpServletRequest request){
        JSONObject result = new JSONObject();
        Iterable<Role> roles = roleService.getRoleInfo();
//        JSONObject mm = new JSONObject();
//        JSONObject rtMsg = CommonRestUtil.doRest("roleInfo", PORTAL_WEB_SERVER, mm, ERestType.GET, logger,"查询角色信息", request);
//        if(rtMsg.getBoolean("success")){
//            rtJo.put("data",rtMsg.getJSONArray("message"));
//        }
        return roles;
    }
//
    @RequestMapping(value = "/saveRoleInfoData" ,method = RequestMethod.POST)
    public @ResponseBody
    Message saveRoleInfoData(HttpServletRequest request){
        Role role = new Role();
        role.setDescription(request.getParameter("description"));
        role.setName(request.getParameter("name"));

        role.setState(Integer.parseInt(request.getParameter("state")));
        role.setSystemId(request.getParameter("systemId"));
        String roleId = request.getParameter("roleId");
        if(roleId!=null&&!roleId.isEmpty()){
            role.setRoleId(roleId);
        }

        try{
            Role result =roleService.save(role);
            return MessageUtil.getSuccessMsg(result);
        } catch (Exception e){
            return MessageUtil.getErrorMsg(e);
        }
    }
//
//
    @RequestMapping(value = "/delRoleInfo" ,method = RequestMethod.POST)
    public @ResponseBody
    Message delRoleInfo(HttpServletRequest request){
        String roleId = request.getParameter("roleId");

        try{
            roleService.delete(roleId);
            return MessageUtil.getSuccessMsg("删除成功");
        } catch(Exception e){
            return MessageUtil.getErrorMsg(e);
        }


    }

    @RequestMapping(value = "/getSystem" ,method = RequestMethod.GET)
    public @ResponseBody
    Iterable<AppTree> getSystem(HttpServletRequest request){

        return appTreeService.getTopAppTree();
    }



}
