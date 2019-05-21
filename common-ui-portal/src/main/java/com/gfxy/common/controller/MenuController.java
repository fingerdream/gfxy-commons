package com.gfxy.common.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gfxy.common.portal.entity.AppButton;
import com.gfxy.common.portal.entity.AppTree;
import com.gfxy.common.portal.entity.RoleResources;
import com.gfxy.common.portal.service.AppButtonService;
import com.gfxy.common.portal.service.AppTreeService;
import com.gfxy.common.portal.service.RoleResourceService;
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
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * @author: lijixin 2019-05-14
 */
@Controller
@RequestMapping("/menu")
public class MenuController {

    private static Logger logger = LoggerFactory.getLogger(MenuController.class);

    @Autowired
    private AppTreeService appTreeService;

    @Autowired
    private AppButtonService appButtonService;

    @Autowired
    private RoleResourceService roleResourceService;


    @RequestMapping("/index.action")
    public String handleRequest(HttpServletRequest request) {
        return "base/system/menuInfo";
    }


    /**
     * 获取菜单树数据
     * @param request
     * @return
     */
    @RequestMapping(value = "/getMenuTree", method = RequestMethod.GET)
    public @ResponseBody
    JSONArray getMenuTree(HttpServletRequest request) {
        String id = request.getParameter("id");
        String level = request.getParameter("level");
        logger.info("getMenuTree id [{}] level [{}]", id,level);

        String parentId = null;
        if ((level == null || level.equals(""))) {
            parentId = "-1";
        } else {
            parentId = id;
        }

        JSONArray result = new JSONArray();
        List<AppTree> list = appTreeService.getAppTreeByParentId(parentId);
        for (AppTree appTree : list) {

            JSONObject object = new JSONObject();
            object.put("id",appTree.getId());
            object.put("pId",appTree.getParentId());
            object.put("name",appTree.getLabel());
            if(appTree.getIsLeaf() == 0){
                object.put("isParent","true");
            } else {
                object.put("isParent","false");
            }
            object.put("nocheck", "true");
            result.add(object);
        }

        return result;

    }


    /**
     * 获取菜单表格数据
     * @param request
     * @return
     */
    @RequestMapping(value = "/getMenuTablelList", method = RequestMethod.GET)
    public @ResponseBody
    JSONArray getMenuTablelList(HttpServletRequest request) {

        String menuId = request.getParameter("menuId");

        JSONArray result = new JSONArray();
        Iterable<AppTree> iterable = appTreeService.getAppTreeByParentId(menuId);

        Iterator<AppTree> iterator = iterable.iterator();

        int i = 0;
        while(iterator.hasNext()){
            AppTree appTree = iterator.next();
            String jsonStr = JSONObject.toJSONString(appTree);
            JSONObject object = JSONObject.parseObject(jsonStr);
            object.put("number", i++);
            result.add(object);
        }
        logger.debug("菜单表格数据为：" + result);
        return result;
    }

    @RequestMapping(value = "/saveMenuInfoData", method = RequestMethod.POST)
    public @ResponseBody
    Message saveMenuInfoData(HttpServletRequest request) {

        AppTree appTree = new AppTree();
        appTree.setLabel(request.getParameter("label"));
        appTree.setName(request.getParameter("name"));
        appTree.setUrl(request.getParameter("url"));
        appTree.setNotes(request.getParameter("description"));
        appTree.setRelatingId(request.getParameter("relatingId"));
        appTree.setIsLeaf(Integer.parseInt(request.getParameter("isLeaf")));
        appTree.setOrderNum(Integer.parseInt(request.getParameter("orderNum")));
        appTree.setIconCls(request.getParameter("iconCls"));
        appTree.setOpenType(Integer.parseInt(request.getParameter("openType")));
        appTree.setParentId(request.getParameter("parentId"));

        String levelNumStr = request.getParameter("levelNum")==null?"1":request.getParameter("levelNum");
        appTree.setLevelNum(Integer.parseInt(levelNumStr)+2);
        appTree.setDisabled(0);
        String id = request.getParameter("id");
        if(id!=null && !id.isEmpty()){
            appTree.setId(id);
        }

        logger.debug("需要保存的菜单数据为：" + appTree);

        try{
            AppTree result = appTreeService.save(appTree);
            logger.info("保存菜单成功 :{}" + result);
            return MessageUtil.getSuccessMsg(result);
        } catch (Exception e){
            logger.error("保存菜单失败" ,e);
            return MessageUtil.getErrorMsg(e);
        }


    }

    @RequestMapping(value = "/getRoleMenuTree", method = RequestMethod.POST)
    public @ResponseBody
    JSONArray getRoleMenuTree(HttpServletRequest request) {
        String roleId = request.getParameter("roleId");
        String systemId = request.getParameter("systemId");
        String level = request.getParameter("level");
        JSONArray result = new JSONArray();
        if(level==null){
            List<Map> roleMenus = appTreeService.getRoleMenuType(roleId,systemId);
            logger.info("查询角色菜单信息返回：{}", roleMenus);

            for (Map roleMenu : roleMenus) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("id", roleMenu.get("ID"));
                jsonObject.put("pid", roleMenu.get("PARENTID"));
                jsonObject.put("name", roleMenu.get("LABEL"));
                jsonObject.put("nocheck", false);
                int idLeafStr =((Integer)roleMenu.get("ISLEAF")).intValue();
                if (idLeafStr==0) {
                    jsonObject.put("isParent", true);
                    jsonObject.put("open", true);
                } else {
                    jsonObject.put("isParent", false);
                }
                jsonObject.put("checked", roleMenu.get("CHECKED").equals("TRUE") ? true : false);
                result.add(jsonObject);
            }



        }
        return result;
    }




    @RequestMapping(value = "/getAppBtnList", method = RequestMethod.GET)
    public @ResponseBody
    Message getAppBtnList(HttpServletRequest request) {
        String appId = request.getParameter("appId");
        try{
            List<AppButton> result = appButtonService.getAppButton(appId);
            return MessageUtil.getSuccessMsg(request);
        } catch(Exception e){
            return MessageUtil.getErrorMsg(e);
        }


    }

    @RequestMapping(value = "/saveRoleTreeData", method = RequestMethod.POST)
    public @ResponseBody
    Message saveRoleTreeData(HttpServletRequest request) {

        String param = request.getParameter("param");
        logger.info("saveRoleTreeData param is " + param);
        JSONObject paramObj = JSONObject.parseObject(param);
        String roleId = paramObj.getString("roleId");
        JSONArray checkNodes = paramObj.getJSONArray("checkNode");
        String domainIds = "";
        String checkBtns = "";
        for (int i = 0; i < checkNodes.size(); i++) {
            JSONArray btnja = checkNodes.getJSONObject(i).getJSONArray("btn");
            for (int j = 0; j < btnja.size(); j++) {
                checkBtns = checkNodes + btnja.getString(j) + ",";
            }
            domainIds = domainIds + checkNodes.getJSONObject(i).getString("id") + ",";

        }
        if(!domainIds.isEmpty()){
            domainIds.substring(0,domainIds.length()-1);
        }
        if(!checkBtns.isEmpty()){
            checkBtns.substring(0,checkBtns.length()-1);
        }

        roleResourceService.delRoleMenuOrBtn(roleId,0);
        roleResourceService.addRoleMenu(roleId,domainIds);

        roleResourceService.delRoleMenuOrBtn(roleId,1);
        roleResourceService.addRoleMenuBtn(roleId,checkBtns);

        return MessageUtil.getSuccessMsg("success");
    }

}
