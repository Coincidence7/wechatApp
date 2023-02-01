Page({
	data:{
		markers: [{
			longitude:116.33,
			latitude:39.93,
			id: 1,
			width: 34,
			height: 49
		}],
		width: 0,
		height: 0,
		
	},
	onLoad: function(options){
		console.log("进入map")
		this.setData({
			width: getApp().globalData.windowWidth,
			height: getApp().globalData.windowHeight
		})
		//console.log(this.data)
	},
	markertap: function(e){
		console.log(e)
	}
})