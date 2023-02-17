
Page({
	data:{
		title: '',
		refresher_triggered: false	
	},
	refresh: function(e){
		this.setData({
			refresher_triggered: true
		})
		// TODO 刷新功能
		setTimeout(() => {
			this.setData({
				refresher_triggered: false
			})
		}, 1000)
		
		
	},
	abort: function(e){
		this.setData({
			refresher_triggered: false
		})
		console.log(e)
	},
	store: function(e){
		this.setData({
			refresher_triggered: false
		})
		console.log(e)
	}
})