package com.gfxy.common.portal.service;

import com.gfxy.common.portal.dao.StaffMapper;
import com.gfxy.common.portal.entity.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author: lijixin 2019-05-17
 */
@Service
public class StaffService {

    @Autowired
    private StaffMapper staffMapper;


    public Staff getStaffById(String staffId) {

        return staffMapper.selectByPrimaryKey(staffId);
    }
}
