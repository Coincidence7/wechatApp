package com.backend.wechatapp.service.impl.user;

import com.backend.wechatapp.mapper.UserCtrlMapper;
import com.backend.wechatapp.mapper.UserMapper;
import com.backend.wechatapp.mapper.testMapper;
import com.backend.wechatapp.pojo.User;
import com.backend.wechatapp.pojo.UserCtrl;
import com.backend.wechatapp.pojo.test;
import com.backend.wechatapp.service.user.curdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class curdServiceImpl implements curdService {

    @Autowired
    UserMapper userMapper;

    @Autowired
    UserCtrlMapper userCtrlMapper;

    @Autowired
    testMapper testMapper;

    @Override
    public void c(User user) {
        userMapper.insert(user);
    }

    @Override
    public void r(String id) {
        List<test> userList = testMapper.selectList(null);
        for (int i = 0; i < userList.size(); i++){
            System.out.println(userList.get(i));
        }
    }

    @Override
    public void u(User user) {

    }

    @Override
    public void d(String id) {

    }
}
