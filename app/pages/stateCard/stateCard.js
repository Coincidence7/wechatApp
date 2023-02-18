Component({
	properties:{
		imageUrl:{
			type: String,
			value: '/../static/default_image.png'
		},
		params: {
			type: Array,
			value: []
		},
		imageDescription: {
			type: String,
			value: '暂无图片'
		},
		defaultData:{
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