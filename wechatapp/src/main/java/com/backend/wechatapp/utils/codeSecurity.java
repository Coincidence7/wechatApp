package com.backend.wechatapp.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class codeSecurity {

    private static final String HEX = "0123456789abcdef";

    public static String encode(String sessionKey, String openId){
        long nowMillis = System.currentTimeMillis();
        try{
            MessageDigest md5 = MessageDigest.getInstance("MD5");
            int sessionKeyCut = (int)(Math.random() * (sessionKey.length() - 1));
            int openIdCut = (int)(Math.random() * (openId.length() - 1));
            String NewSessionKey = sessionKey.substring(sessionKeyCut + 1) + sessionKey.substring(0, sessionKeyCut + 1);
            String NewOpenId = openId.substring(openIdCut + 1) + openId.substring(0, openIdCut + 1);
            System.out.println("cutting finished --> " + NewSessionKey);
            System.out.println("cutting finished --> " + NewOpenId);
            md5.update((NewSessionKey + nowMillis + NewOpenId).getBytes());
            String res = byte2str(md5.digest());
            System.out.println("hashing finished --> " + res);
            return res;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return "error";
    }
    private static String byte2str(byte []bytes){
        int len = bytes.length;
        StringBuffer result = new StringBuffer();
        for (int i = 0; i < len; i++) {
            byte byte0 = bytes[i];
            result.append(HEX.charAt(byte0 >>> 4 & 0x0f));
            result.append(HEX.charAt(byte0 & 0x0f));
        }
        return result.toString();
    }

}
