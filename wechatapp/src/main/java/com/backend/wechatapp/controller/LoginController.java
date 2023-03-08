package com.backend.wechatapp.controller;

import com.alibaba.fastjson.JSONObject;
import com.backend.wechatapp.pojo.User;
import com.backend.wechatapp.service.user.curdService;
import com.backend.wechatapp.utils.HttpUtils;
import com.backend.wechatapp.utils.codeSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class LoginController {

    @Autowired
    private curdService mycurdService;

    @GetMapping("/user/test")
    public void UserTest(){

        mycurdService.r("1");


        System.out.println("YES");
    }
    @GetMapping("/user/login")
    public HashMap<String, String> UserLogin(@RequestParam HashMap<String, String> data){
        HashMap<String, String> res = new HashMap<>();
        JSONObject jsonObject = JSONObject.parseObject(HttpUtils.sendGetLogin(data));
        res.put("error_message", "success");
        res.put("session", codeSecurity.encode(jsonObject.getString("session_key"), jsonObject.getString("openid")));
        return res;
    }

}
