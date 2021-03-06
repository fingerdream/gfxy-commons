package com.gfxy.common.portal.dao;

import com.gfxy.common.portal.entity.RoleResources;
import com.gfxy.common.portal.entity.RoleResourcesExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface RoleResourcesMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int countByExample(RoleResourcesExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int deleteByExample(RoleResourcesExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int deleteByPrimaryKey(String relId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int insert(RoleResources record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int insertSelective(RoleResources record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    List<RoleResources> selectByExample(RoleResourcesExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    RoleResources selectByPrimaryKey(String relId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int updateByExampleSelective(@Param("record") RoleResources record, @Param("example") RoleResourcesExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int updateByExample(@Param("record") RoleResources record, @Param("example") RoleResourcesExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int updateByPrimaryKeySelective(RoleResources record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ROLE_RESOURCES
     *
     * @mbggenerated Tue May 21 10:11:34 CST 2019
     */
    int updateByPrimaryKey(RoleResources record);
}