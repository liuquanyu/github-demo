<template>
	
	<view class="container">
	   <view class="container_left">
		   <image style="width: 110px; height: 88px; background-color: gray;" mode="widthFix"  src=""></image>
	   </view>
	   <view class="container_right">
		   <view class="container_right_f"> 
			   <text>临澧县人民医院</text>
		   </view>
		   <view class="container_right_s">
			   <view class="container_right_m"> </view>
			   <view class="container_right_n"></view>
		   </view>
		   <view class="container_right_t"> 
			   
		   </view>
	   </view>
	</view>
 

</template>

<script>
	export default { 

		data() {
			return {
			
				
			}
		},

		onShow() {},

		onLoad() {

		},
		methods: {


		}
	}
</script> 

<style scoped="scss">
	.container{
		width: 100%;
		height: 88px;
		border: 1px solid #1ABB85;
		display: flex;
		.container_left{
			flex:1;
			margin-left:20px
			.container_left image{
				
			}
			 
		}
		.container_right{  
			flex: 2;
			
			 
			.container_right_f{
				 padding-left: 20px; 
			}
			.container_right_s{
				
				.container_right_m{
					
				}
				.container_right_n{
					
				}
			}
			.container_right_t{
				
			}
		}
		
	}
	
	
</style>
