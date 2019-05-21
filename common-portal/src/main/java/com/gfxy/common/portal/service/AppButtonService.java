package com.gfxy.common.portal.service;

import com.gfxy.common.portal.dao.AppButtonMapper;
import com.gfxy.common.portal.entity.AppButton;
import com.gfxy.common.portal.entity.AppButtonExample;
import com.gfxy.commons.utils.UUIDUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: lijixin 2019-05-17
 */
@Service
public class AppButtonService {

    @Autowired
    private AppButtonMapper appButtonMapper;

    public int addBtn(AppButton appButton)  {
        appButton.setId(UUIDUtil.getUUID());
        return appButtonMapper.insertSelective(appButton);
    }

    public List<AppButton> getAppButton(String appId){
        AppButtonExample example = new AppButtonExample();
        example.createCriteria().andAppIdEqualTo(appId);

        return appButtonMapper.selectByExample(example);
    }

}
