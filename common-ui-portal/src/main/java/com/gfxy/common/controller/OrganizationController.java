package com.gfxy.common.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gfxy.common.portal.entity.Organization;
import com.gfxy.common.portal.service.OrganizationService;
import com.gfxy.commons.message.Message;
import com.gfxy.commons.message.MessageUtil;
import com.gfxy.commons.utils.UUIDUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Iterator;
import java.util.List;

/**
 * @author: lijixin 2019-05-10
 */
@Controller
@RequestMapping("/organization")
public class OrganizationController {

    @Autowired
    private OrganizationService organizationService;

    @RequestMapping("index.action")
    public String handleRequest(HttpServletRequest request){
        return "base/system/organization";
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public @ResponseBody
    JSONArray getAll(HttpServletRequest request, HttpServletResponse response){
        String organizationId = request.getParameter("organizationId");
        String level = request.getParameter("level");
        if(organizationId == null ){
            List<Organization> organizations = organizationService.findAll();
            JSONArray result = this.addIsParent(organizations);
            System.out.println(result);
            return result;
        } else {
            List<Organization> organizations = organizationService.findAllByParentId(organizationId);
            JSONArray result = this.addIsParent(organizations);
            System.out.println(result);
            return result;
        }

    }

    @RequestMapping(value = "/getOrganizationList", method = RequestMethod.GET)
    public @ResponseBody Iterable<Organization> getOrganizationList(HttpServletRequest request, HttpServletResponse response){
        String id = request.getParameter("id");

        return organizationService.findAllByParentId(id);
    }

    @RequestMapping(value = "/saveOrganization", method = RequestMethod.POST)
    public @ResponseBody
    Message saveOrganization(HttpServletRequest request, HttpServletResponse response){


        try{

            String name = request.getParameter("name");
            String description = request.getParameter("description");
            String state = request.getParameter("state");
            String parentId = request.getParameter("parentId");

            int nodeLevel = Integer.parseInt(request.getParameter("nodeLevel")) + 1;

            Organization organization = new Organization();

            organization.setDescription(description);
            organization.setName(name);
            organization.setNodeLevel(nodeLevel);
            organization.setParentId(parentId);
            organization.setState(Integer.parseInt(state));
            String organizationId = request.getParameter("organizationId");
            if(organizationId==null){
                organizationId = UUIDUtil.getUUID();
                organization.setOrganizationId(organizationId);
                Organization result =organizationService.insert(organization);
                return MessageUtil.getSuccessMsg(result);
            }else {
                organization.setOrganizationId(organizationId);
                Organization result =organizationService.update(organization);
                return MessageUtil.getSuccessMsg(result);
            }


        } catch (Exception e){
            return MessageUtil.getErrorMsg(e);
        }

    }

    private JSONArray addIsParent(Iterable<Organization> it){
        JSONArray result = new JSONArray();
        Iterator<Organization> iterator = it.iterator();
        while(iterator.hasNext()){
            Organization organization = iterator.next();
            String jsonStr = JSONObject.toJSONString(organization);

            JSONObject object = JSONObject.parseObject(jsonStr);
            object.put("isParent", "true");

            result.add(object);
        }
        return result;
    }
}
