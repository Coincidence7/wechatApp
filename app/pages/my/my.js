// logs.js
const util = require('../../utils/util.js')

let defaultAvatarUrl = wx.getStorageSync('avatarUrl');
let defaultNickname = wx.getStorageSync('nickname');

console.log(defaultNickname)
if(!defaultAvatarUrl){
	defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
}


Page({
  data: {
    logs: [],
	avatarUrl: defaultAvatarUrl,
	nickname: defaultNickname
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
	bindViewTapMyPage(){
		wx.checkSession({
			success: function(res){
				console.log("登录未过期")
			},
			fail: function(res){
				console.log("登录")
				// 登录
				wx.login({
					success: res => {
					// 发送 res.code 到后台换取 openId, sessionKey, unionId
						if(res.code){
							wx.request({
								url: "http://localhost:3000/user/login",
								method: "GET",
								data:{
									url: "https://api.weixin.qq.com/sns/jscode2session",
									js_code : res.code,
								},
								success(res){
									// console.log(res.data.session);
									try{
										wx.setStorageSync("3rd_session", res.data.session);
									}catch(e){
										console.log(e);
									}			  				
								}
							})
						}else {
							console.log("登陆失败！" + res.errMsg)
						}
					},
					fail: res =>{
					  console.log(res)
					}
				})
			}
		})
	},
	onChooseAvatar: function(e){
		wx.setStorageSync('avatarUrl', e.detail.avatarUrl)
		this.setData({
			avatarUrl: e.detail.avatarUrl
		})
		console.log(e.detail)
	},
	onChooseNickname: function(e){
		console.log(e)
		this.setData({
			nickname: e.detail.value
		})
		wx.setStorageSync('nickname', e.detail.value)
	}
})
