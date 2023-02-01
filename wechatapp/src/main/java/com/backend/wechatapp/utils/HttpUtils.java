package com.backend.wechatapp.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author luo'xing'yue
 * @createTime 2023/02/01
 * @refer https://blog.csdn.net/Maomaoqifeng/article/details/85095066
 */
public class HttpUtils {

    public static String sendGetLogin(HashMap<String, String> data){
        String url = "";

        try{
            url += data.get("url") + "?";
            url += "appid=" + appIdUtils.appid + "&";
            url += "secret=" + appIdUtils.secret + "&";
            url += "js_code=" + data.get("js_code") + "&";
            url += "grant_type=authorization_code";

            System.out.println("url ---> " + url);

            return HttpUtils.sendGet(url);
        }catch (Exception e){
            e.printStackTrace();
        }
        return "error";
    }

    public static String sendGet(String url){
        String result = "";
        BufferedReader in = null;

        try{
            String urlNameString = url;
            URL realUrl = new URL(urlNameString);

            URLConnection connection = realUrl.openConnection();

            connection.setRequestProperty("accept", "*/*");
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");

            connection.connect();;

            Map<String, List<String>> map = connection.getHeaderFields();

            for(String key : map.keySet()){
                System.out.println(key + " ---> " + map.get(key));
            }

            in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            while((line = in.readLine()) != null){
                result += line;
            }

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        finally {
            try {
                if(in != null){
                    in.close();
                }
            }catch (Exception e2){
                e2.printStackTrace();
            }
        }
        return result;
    }

}
