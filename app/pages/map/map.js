import Notify from "@vant/weapp/notify/notify"
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

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
		more: false,
		activeKey: 0,
		
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
		console.log("yes")
		this.setData({
			more: true
		})
	},
	onLoad: function(options){
		console.log("进入map")
		qqmapsdk = new QQMapWX({
			key: 'IO7BZ-WRKL3-27633-3SRVO-VOKZE-I7F6G'
		})
		this.setData({
			width: getApp().globalData.windowWidth,
			height: getApp().globalData.windowHeight
		})
		//console.log(this.data)
	},
	markertap: function(e){
		console.log(e)
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
		qqmapsdk.reverseGeocoder({
			success: res =>{
				console.log(res)
			},
			fail: err =>{
				console.log(err)
			}
		})
		
		// wx.request({
		// 	url: "https://apis.map.qq.com/ws/location/v1/ip",
		// 	header:{  
		// 		'content-type':'application/json'
		// 	},
		// 	method:'GET', 
		// 	success(res){
		// 		console.log(res);
		// 	},
		// 	fail(res){
		// 		console.log(fail)
		// 	}
		// })
	}
})