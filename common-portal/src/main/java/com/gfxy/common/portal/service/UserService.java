package com.gfxy.common.portal.service;

import com.gfxy.common.portal.dao.UserMapper;
import com.gfxy.common.portal.entity.User;
import com.gfxy.common.portal.entity.UserExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: lijixin 2019-05-17
 */
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public List<User> findUserByLoginName(String username) {
        UserExample example = new UserExample();
        example.createCriteria().andLoginNameEqualTo(username);
        List<User> list = userMapper.selectByExample(example);
        return list;
    }
}
