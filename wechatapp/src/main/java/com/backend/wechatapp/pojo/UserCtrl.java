package com.backend.wechatapp.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("UserCtrl")
public class UserCtrl {
    @TableField("UserName")
    private String UserName;
    @TableField("PWD")
    private String PWD;
}
