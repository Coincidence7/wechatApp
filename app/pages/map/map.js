import Notify from "@vant/weapp/notify/notify"
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
	data:{
		markers: [{
			id: 1,
			longitude: "116.40",
			latitude: "39.91",
			iconPath: '/../static/location.png',
			width: 50,
			height: 50,
			callout: {
				content: '站点详情',
				color: '#ff0000',
				fontSize: 14,
				borderWidth: 2,
				borderRadius: 10,
				borderColor: '#000000',
				bgColor: '#ffffff',
				padding: 5,
				display: "ALWAYS",
				textAlign: 'center'
			},
		}],
		width: 0,
		height: 0,
		more: false,
		activeKey: 0,
		searchValue: "",
		showDetail: false,
		env: ""
		
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
		qqmapsdk = new QQMapWX({
			key: 'IO7BZ-WRKL3-27633-3SRVO-VOKZE-I7F6G'
		})
		this.setData({
			width: getApp().globalData.windowWidth,
			height: getApp().globalData.windowHeight
		})
		this.setData({
			env: wx.getAccountInfoSync().miniProgram.envVersion
		})
		
		// if(this.data.env != 'develop'){
		// 	for (var i = 0; i < this.data.markers.length; i++) {
		// 		let s = 'markers[' + i + '].callout.display'
		
		// 		this.data.markers[i].callout.display = "BYCLICK"
		// 		// this.setData({
		// 		// 	["this.data.markers[" + i + "]"] : "BYCLICK"
		// 		// })
				
		// 	}
		// }
		// console.log(this.data)
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
	}
})