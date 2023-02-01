package com.backend.wechatapp;

import dev.tcp.server.SocketTest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WechatappApplication {

    public static void main(String[] args) {

        SpringApplication.run(WechatappApplication.class, args);
        //SocketTest.run();
    }

}
