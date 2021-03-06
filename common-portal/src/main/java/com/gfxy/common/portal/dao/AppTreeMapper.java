package com.gfxy.common.portal.dao;

import com.gfxy.common.portal.entity.AppTree;
import com.gfxy.common.portal.entity.AppTreeExample;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface AppTreeMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int countByExample(AppTreeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int deleteByExample(AppTreeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int insert(AppTree record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int insertSelective(AppTree record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    List<AppTree> selectByExample(AppTreeExample example);

    List<AppTree> getAppTreeByParentIdForMenu(@Param("parentId")String parentId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    AppTree selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int updateByExampleSelective(@Param("record") AppTree record, @Param("example") AppTreeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int updateByExample(@Param("record") AppTree record, @Param("example") AppTreeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int updateByPrimaryKeySelective(AppTree record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_TREE
     *
     * @mbggenerated Fri May 17 14:38:39 CST 2019
     */
    int updateByPrimaryKey(AppTree record);

    List<AppTree> getAppsByAdmin(@Param("parentId") String parentId);

    AppTree getAdminAppById(@Param("menuId") String menuId);
    AppTree getUserAppById(@Param("userName") String userName, @Param("menuId") String menuId);
}