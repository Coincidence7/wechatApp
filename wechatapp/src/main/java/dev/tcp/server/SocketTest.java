package dev.tcp.server;

import org.springframework.security.web.util.matcher.IpAddressMatcher;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.UnknownHostException;

public class SocketTest {

    public static String toUnicode(String s){
        String as[] = new String[s.length()];
        String s1 = "";
        for(int i = 0; i < s.length(); i++){
            as[i] = Integer.toHexString(s.charAt(i) & 0xffff);
            s1 = s1 + as[i];
        }
        return s1;
    }

    public static void run(){
        try{
//            testClient();

            Socket socket = new Socket("", 11882);
            if(socket.isConnected()){
                System.out.println("连接中...");
                OutputStream ops = socket.getOutputStream();
                String content = toUnicode("微服务");

                String msg = "test" + content;

                ops.write(msg.getBytes());
                ops.flush();
                System.out.println();
            }
            testServer();
        }catch (UnknownHostException unknownHostException){
            unknownHostException.printStackTrace();
        } catch (IOException ioException) {
            ioException.printStackTrace();
        }
    }
    /**
     * 服务端
     */
    public static void testServer() throws IOException {
        // 创建服务端ServerSocket
        ServerSocket server = new ServerSocket();
        // 绑定在某一个端口上
        server.bind(new InetSocketAddress(8888));// 只有端口，默认绑定本机的IP -- localhost
        // 监听端口（堵塞，等待他人连接）
        Socket socket = server.accept();
        // 获取收到的资源
        InputStream inputStream = socket.getInputStream();

        byte[] buf = new byte[1024 * 1024];
        int len;
        while((len = inputStream.read(buf)) != -1){
            System.out.println(new String(buf, 0, len));
        }

        inputStream.close();
        socket.close();


    }
    /**
     * 客户端
     */
    public static void testClient() throws IOException{
        // 创建Socket
        Socket socket = new Socket();
        // 使用socket进行连接（套接字：IP + 端口号），三次握手底层已帮我们实现
        socket.connect(new InetSocketAddress("", 8888));
        // 发送消息
        InputStream inputStream = socket.getInputStream();
        OutputStream outputStream = socket.getOutputStream();
        outputStream.write("hello server!".getBytes());

        outputStream.close();
        inputStream.close();
        socket.close();

    }

}
