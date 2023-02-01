package com.backend.wechatapp.controller;

import com.alibaba.fastjson.JSONObject;
import com.backend.wechatapp.utils.HttpUtils;
import com.backend.wechatapp.utils.codeSecurity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class LoginController {

    @GetMapping("/user/login")
    public HashMap<String, String> UserLogin(@RequestParam HashMap<String, String> data){
        HashMap<String, String> res = new HashMap<>();
        JSONObject jsonObject = JSONObject.parseObject(HttpUtils.sendGetLogin(data));
        res.put("error_message", "success");
        res.put("session", codeSecurity.encode(jsonObject.getString("session_key"), jsonObject.getString("openid")));
        return res;
    }

}
