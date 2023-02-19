Component({
	properties:{
		imageUrl:{
			type: String,
			value: '/../static/default_image.png'
		},
		imageDescription: {
			type: String,
			value: '暂无图片'
		},
		params: {			// 传入的数据
			type: Array,
			value: []
		},
		defaultData:{  		// 站点是否存在数据
			type: Boolean,
			value: false
		},
	},
	data:{
		
	},
	methods:{
		loadImage: function(e){
			console.log(e)
		}
	}
})