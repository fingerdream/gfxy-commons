package com.gfxy.common.portal.service;

import com.gfxy.common.portal.dao.AppButtonMapper;
import com.gfxy.common.portal.dao.AppTreeMapper;
import com.gfxy.common.portal.dao.RoleMapper;
import com.gfxy.common.portal.entity.AppButton;
import com.gfxy.common.portal.entity.AppButtonExample;
import com.gfxy.common.portal.entity.AppTree;
import com.gfxy.common.portal.entity.Role;
import com.gfxy.commons.utils.UUIDUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author: lijixin 2019-05-15
 */
@Service
public class RoleService {

    @Autowired
    private RoleMapper roleMapper;

    @Autowired
    private AppTreeMapper appTreeMapper;

    @Autowired
    private AppButtonMapper appButtonMapper;

    public List<Role> getRoleInfo(){
        return roleMapper.selectByExample(null);
    }

    public Role save(Role role){
        if(role.getRoleId()==null || role.getRoleId().isEmpty()){
            role.setRoleId(UUIDUtil.getUUID());
            roleMapper.insert(role);
        } else {
            roleMapper.updateByPrimaryKey(role);
        }
        return role;
    }

    public void delete(String roleId){
        roleMapper.deleteByPrimaryKey(roleId);
    }


    public Map<String,Object> getMenuAuth(String menuId,String userName){
        Map<String,Object> result = new HashMap<String, Object>();
        if(userName.equals("admin")){
            AppTree appTree = appTreeMapper.getAdminAppById(menuId);
            if(appTree==null){
                result.put("isPageAuth", "0");
            } else {
                result.put("isPageAuth", "1");
                result.put("openUrl", appTree.getUrl());
                result.put("btns", "all");
            }
        } else {
            AppTree appTree = appTreeMapper.getUserAppById(userName, menuId);
            if (appTree == null) {
                result.put("isPageAuth", "0");
            } else {
                result.put("isPageAuth", "1");
                result.put("openUrl", appTree.getUrl());
                List<AppButton> tawAppBtns = getBtnByMenu(menuId);
                if (tawAppBtns.size() == 0) {
                    result.put("btns", "all");
                } else {
                    result.put("btns", "some");
                    List<AppButton> reRoleResourcesList = getRoleBtnList(userName, menuId);
                    result.put("btnList", reRoleResourcesList);
                }
            }
        }
        return result;
    }

    private List<AppButton> getBtnByMenu(String menuId) {
        AppButtonExample appButtonExample = new AppButtonExample();
        AppButtonExample.Criteria criteria = appButtonExample.createCriteria();
        criteria.andAppIdEqualTo(menuId);
        return appButtonMapper.selectByExample(appButtonExample);
    }


    private List<AppButton> getRoleBtnList(String userName, String menuId) {
        return appButtonMapper.getRoleBtnList(userName, menuId);
    }
}
