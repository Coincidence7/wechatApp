<template>
	<view class="content">
		这是个人界面
		<button type="warn" @click="test">测试</button>
		<view class="list-group">
		  <a class="list-group-item" href="#"><i class="fa fa-home fa-fw"></i>&nbsp; Home</a>
		  <a class="list-group-item" href="#"><i class="fa fa-book fa-fw"></i>&nbsp; Library</a>
		  <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw"></i>&nbsp; Applications</a>
		  <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw"></i>&nbsp; Settings</a>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		methods: {
			test(){				
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
