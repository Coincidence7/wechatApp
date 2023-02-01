// app.js
App({
	globalData: {
		userInfo: null,
		active: 0,
		windowHeight: 0,
		windowWidth: 0
	},
	onLaunch() {
		let that = this
		// 展示本地存储能力
		const logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)
		wx.checkSession({
			success: function(){
				console.log("session未过期");
			},
			fail: function(){
				console.log("登录过期")
				// 登录
				wx.login({
				  success: res => {
					// 发送 res.code 到后台换取 openId, sessionKey, unionId
					console.log("用户信息")
					console.log(res.code)
					wx.request({
						url: "http://localhost:3000/user/login",
						method: "GET",
						data:{
							url: "https://api.weixin.qq.com/sns/jscode2session",
							js_code : res.code,
						},
						success(res){
							console.log(res.data.session);
							
							try{
								wx.setStorageSync("3rd_session", res.data.session);
							}catch(e){
								console.log(e);
							}
							
						}
					})
				  }
				})
			}
		})
		
		wx.getSystemInfo({
		  success: function (res) {
			
			//console.log(res);
			// 高度,宽度 单位为px
			that.globalData.windowHeight = res.windowHeight
			that.globalData.windowWidth = res.windowWidth
		  }
		})
	},
  
})
