package com.backend.wechatapp.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("test")
public class test {
    @TableId("时间")
    private String time;
    @TableField("厨余垃圾")
    private String g1;
    @TableField("有害垃圾")
    private String g2;
    @TableField("可回收垃圾")
    private String g3;
    @TableField("其他垃圾")
    private String g4;

}
