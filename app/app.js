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
