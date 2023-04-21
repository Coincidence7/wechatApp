// index.js
// 获取应用实例
const app = getApp()
import Toast from '@vant/weapp/toast/toast';

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
	page: 0,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
	  
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
	var socket = wx.connectSocket({
		url: 'ws://49.233.5.44:8080',

		success: res =>{
			console.info("成功")
		}
	})
	
	      
	let that = this
	socket.onOpen(function () {
		console.info('连接打开成功');
		
		socket.send({
			data: '{"message" : "hello", "origin": "wechat"}',
			success: res => {
				that.setData({
					motto: res.errMsg
				})
				console.info(res);
			}
		});
	});
	socket.onClose(function () {
		console.info('连接关闭成功');
	});
	socket.onError(function (e) {
		console.info(e);
		that.setData({
			motto: e.errMsg
		})
	});
	//服务器发送监听
	socket.onMessage(function (e) {
		console.info(e);
		var data = e.data;
		Toast("您有一项新任务")
	});
	
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
	  
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onChange(event){
	this.setData({ active: event.detail });
	if(event.detail == 1){
		wx.navigateTo({
			url: '../map/map'
		})
	}
  }
})
