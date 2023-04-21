import Notify from "@vant/weapp/notify/notify"
var AMapWX = require('../../utils/amap-wx.js');
var amapsdk;
Page({
	data:{
		markers: [{
			id: 0,
			longitude: "116.40",
			latitude: "39.91",
			iconPath: '/../static/location.png',
			width: 50,
			height: 50,
			customCallout: {
				anchorY: 0,
				anchorX:0,
				display: 'BYCLICK',
			},
		}],
		width: 0,
		height: 0,
		more: false,
		activeKey: 0,
		searchValue: "",
		showDetail: false,
		env: "",
		polyline: []
		
    },
    onReady: function (e) {
        this.mapCtx = wx.createMapContext('myMap')
    },
	beforeenter: function(){
		console.log("beforeenter")
	},
	enter: function(){
		console.log("enter")
	},
	after: function(){
		console.log("after")
	},
	afterenter: function(){
		console.log("afterenter")
	},
	beforeleave: function(){
		console.log("beforeleave")
	},
	leave: function(){
		console.log("leave")
	},
	afterleave: function(){
		console.log("afterleave")
	},
	clickoverlay: function(){
		console.log("clickoverlay")
	},
	getMore: function(){
		this.setData({
			more: true
		})
	},
	onSearch: function(){
		console.log("查询")
	},
	onCancel: function(){
		console.log("取消")
	},
	onLoad: function(options){
		amapsdk = new AMapWX.AMapWX({
			key: '5fb99ec993067ae930c04b06311f51dc'
		})
		amapsdk.getRegeo({
		     success: function(data){
		       //成功回调
		       console.log('---------')
				
		       console.log(data)
		     },
		     fail: function(info){
		       //失败回调
		       console.log(info)
		     }
		   })
		
		
		this.setData({
			width: getApp().globalData.windowWidth,
			height: getApp().globalData.windowHeight
		})
		this.setData({
			env: wx.getAccountInfoSync().miniProgram.envVersion
		})
	},
	markertap: function(e){
		// let arr = []
		// for(let i = 0; i < this.data.markers.length; i++){
		// 	arr.push(this.data.markers[i])
		// 	if(i == e.detail.markerId){
		// 		console.log(e.detail.markerId)
		// 		arr[i].customCallout.display = "ALWAYS"
		// 	}else {
		// 		arr[i].customCallout.display = "BYCLICK"
		// 	}
			
		// }
		// this.setData({
		// 	markers: arr
		// })
		this.setData({
			env: "markertap"
		})
	},
	startDrawer: function(e){
		console.log(e)
		this.setData({
			drawer: true
		})
	},
	overDrawer: function(e){
		console.log(e)
	},
	sideOnChange: function(e){
		console.log(e)
		Notify({ type: 'primary', message: e.detail})
	},
	redirectLocation: function(e){
		// 引入SDK核心类
		 
	},
	toDetail: function(){
		this.setData({
			showDetail: true
		})
	},
	closeDetail: function(){
		this.setData({
			showDetail: false
		})
	},
	calloutTap: function(e){
		console.log(e)
		this.setData({
			env: "calloutTap"
		})
		
		this.setData({
			more: true
		})
		this.setData({
			showDetail: true
		})
	}
})
