package com.gfxy.common.portal.service;

import com.gfxy.common.portal.dao.OrganizationMapper;
import com.gfxy.common.portal.entity.Organization;
import com.gfxy.common.portal.entity.OrganizationExample;
import com.gfxy.commons.utils.UUIDUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: lijixin 2019-05-17
 */
@Service
public class OrganizationService {

    private static Logger logger = LoggerFactory.getLogger(OrganizationService.class);

    @Autowired
    private OrganizationMapper organizationMapper;

    public List<Organization> findAllByParentId(String organizationId) {
        OrganizationExample example = new OrganizationExample();
        example.createCriteria().andParentIdEqualTo(organizationId);

        return organizationMapper.selectByExample(example);
    }

    public List<Organization> findAll() {

        return organizationMapper.selectByExample(null);
    }

    public Organization update(Organization organization){
        logger.debug("部门信息为：{} , 准备更新",organization);
        organizationMapper.updateByPrimaryKey(organization);
        return organization;
    }

    public Organization insert(Organization organization) {

        logger.debug("部门信息为：{} , 准备新增,");
        organizationMapper.insert(organization);
        return organization;

    }
}
