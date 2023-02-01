const onChange = (event) =>{
  	  this.setData({ active: event.detail });
  	  if(event.detail == 1){
  		  wx.navigateTo({
  			  url: '../map/map'
  		  })
  	  }
}

module.exports = {
	nav
}