package com.gfxy.common.portal.dao;

import com.gfxy.common.portal.entity.AppTree;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * @author: lijixin 2019-05-17
 */
public interface CommonMapper {

    List<Map> selectDataByRoleId(@Param("roleId") String roleId, @Param("systemIdStr") String systemIdStr);


}
