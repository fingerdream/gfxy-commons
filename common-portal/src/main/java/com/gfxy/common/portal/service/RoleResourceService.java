package com.gfxy.common.portal.service;

import com.gfxy.common.portal.dao.RoleResourcesMapper;
import com.gfxy.common.portal.entity.RoleResources;
import com.gfxy.common.portal.entity.RoleResourcesExample;
import com.gfxy.commons.utils.UUIDUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author: lijixin 2019-05-21
 */
@Service
public class RoleResourceService {

    @Autowired
    private RoleResourcesMapper roleResourcesMapper;

    public int delRoleMenuOrBtn(String roleId, Integer type) {
        RoleResourcesExample roleResourcesExample = new RoleResourcesExample();
        RoleResourcesExample.Criteria criteria = roleResourcesExample.createCriteria();
        criteria.andRoleIdEqualTo(roleId);
        criteria.andTypeEqualTo(type);
        return roleResourcesMapper.deleteByExample(roleResourcesExample);
    }

    /**
     * <p>Method: addRoleMenu </p>
     * <p>Description: 新增角色关联菜单权限</p>
     * <p>date: 2018/10/24 13:27 </p>
     *
     * @author zhuyu[zhuyu@boco.com.cn]
     */
    public void addRoleMenu(String roleId,String appIds) {

        String[] appIdStrs = appIds.split(",");
        for(String appId:appIdStrs){
            RoleResources roleResources = new RoleResources();
            roleResources.setResourceId(appId);
            roleResources.setRoleId(roleId);
            roleResources.setRelId(UUIDUtil.getUUID());
            roleResources.setType(0);
            roleResourcesMapper.insertSelective(roleResources);
        }
    }

    /**
     * 新增角色关联按钮权限
     * @param roleId
     * @param buttonIds
     */
    public void addRoleMenuBtn(String roleId,String buttonIds) {

        String[] appIdStrs = buttonIds.split(",");
        for(String appId:appIdStrs){
            RoleResources roleResources = new RoleResources();
            roleResources.setResourceId(appId);
            roleResources.setRoleId(roleId);
            roleResources.setRelId(UUIDUtil.getUUID());
            roleResources.setType(1);
            roleResourcesMapper.insertSelective(roleResources);
        }
    }
}
