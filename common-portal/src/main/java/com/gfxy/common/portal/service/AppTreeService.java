package com.gfxy.common.portal.service;

import com.gfxy.common.portal.dao.AppTreeMapper;
import com.gfxy.common.portal.dao.CommonMapper;
import com.gfxy.common.portal.entity.AppTree;
import com.gfxy.common.portal.entity.AppTreeExample;
import com.gfxy.commons.utils.UUIDUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * @author: lijixin 2019-05-14
 */
@Service
public class AppTreeService {

    @Autowired
    private AppTreeMapper appTreeMapper;

    @Autowired
    private CommonMapper commonMapper;




    public List<AppTree> getTopAppTree(){
        AppTreeExample example = new AppTreeExample();
        example.createCriteria().andParentIdEqualTo("-1");
        List<AppTree> result = appTreeMapper.selectByExample(example);
        return result;
    }

    public List<AppTree> getAppTreeByParentId(String parentId){
        AppTreeExample example = new AppTreeExample();
        example.createCriteria().andParentIdEqualTo(parentId);
        List<AppTree> result = appTreeMapper.selectByExample(example);
        return result;
    }

    public AppTree save(AppTree appTree){

        if(appTree.getId()==null || appTree.getId().isEmpty()){
            appTree.setId(UUIDUtil.getUUID());
            appTreeMapper.insert(appTree);
            return appTree;
        } else {
            appTreeMapper.updateByPrimaryKey(appTree);
            return appTree;
        }
    }


    public Iterable<AppTree> getAppTreeByParentIdForMenu(String menuParentId,String userName) {
        if(userName.equals("admin")){
            List<AppTree> result = appTreeMapper.getAppsByAdmin(menuParentId);
            System.out.println(result);
            return result;
        } else {
            List<AppTree> result = appTreeMapper.getAppTreeByParentIdForMenu(menuParentId);
            System.out.println(result);
            return result;
        }

    }


    public List<Map> getRoleMenuType(String roleId, String systemIds){
        String[] systems = systemIds.split(",");
        String newSystemIds = "";
        for (String system : systems) {
            newSystemIds = newSystemIds + ",'"+system +"'";
        }

        List<Map>  lists = commonMapper.selectDataByRoleId(roleId,newSystemIds);
        return lists;
    }




}
