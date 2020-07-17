<template>
	<view class="content">
		<!-- 搜索医生，医院 -->
		<view class="home_search" >
			<image class="search_icon" src="../../static/img/search.png"></image>
			<input class="uni-input" maxlength="10" placeholder=" 在此可以搜索医院 医生" />
		</view>
		<!-- 轮播图 -->
		<view class="sel_hospital_wrap">
			<swiper :style="'height: 100px;'" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000" circular="true">
				<block v-for="(item, index) in imgUrls" :key="index">
					<swiper-item>
						<image @load="imageLoad" :src="item" class="slide-image" mode="widthFix"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<!-- 各种 tab -->

		<view class="tabs">
			
			<navigator class="tab" url="../guahao/index">
				<image class="tab_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</navigator>
			
			<view class="tab">
				<image class="tab_icon" src="../../static/img/health_card.png"></image>
				<text>电子健康卡</text>
			</view>
			<view class="tab">
				<image class="tab_icon" src="../../static/img/medical.png"></image>
				<text>就诊记录</text>
			</view>
			<view class="tab">
				<image class="tab_icon" src="../../static/img/paymen.png"></image>
				<text>缴费管理</text>
			</view>
			<view class="tab">
				<image class="tab_icon" src="../../static/img/health_doc.png"></image>
				<text>健康档案</text>
			</view>
		</view>
		
		<view class="main">
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
		</view>
		<view class="main">
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
		</view>
		<view class="main">
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
			<view class="main_item">
				<image class="main_item_icon" src="../../static/img/appointment.png"></image>
				<text>预约挂号</text>
			</view>
		</view>
		<!-- 健康资讯 -->
		<view class="news">
			<view class="news_icon">
				<image class="" src="../../static/img/health_news.png"></image>
			</view>
			<view class="news_item">
				<text>医院卫生局重新制定医疗保险计划</text>
				<text>医院卫生局重新制定医疗保险计划，计划与地方卫生院合作...</text>
			</view>
		</view>
		<!-- 展示医生 -->
		
		<view class="doctor_head">
			<view> 县级名医</view>
			<view>更多</view>
		</view>
		
		<view class="doctors">
			<view class="doctor">
				<view class="doctor_img">
					<image src="../../static/img/doctor.png"></image>
				</view>
				<text>刘华强</text>
				<text>呼吸内科门诊</text>
				<text>临澧县人民医院</text>
			</view>
			<view class="doctor">
				<view class="doctor_img">
					<image src="../../static/img/doctor.png"></image>
				</view>
				<text>刘华强</text>
				<text>呼吸内科门诊</text>
				<text>临澧县人民医院</text>
			</view>
			<view class="doctor">
				<view class="doctor_img">
					<image src="../../static/img/doctor.png"></image>
				</view>
				<text>刘华强</text>
				<text>呼吸内科门诊</text>
				<text>临澧县人民医院</text>
			</view>
		</view>
		
		<view class="news_head">
			<view>健康资讯</view>
			<view>更多</view>
		</view>
		<view class="news">
			<view>
				<view class="news_title">今天花五分钟，让我们一起了解艾滋病</view>
				<view class="news_time">2020-05-16</view>
			</view>
			<view>
				<view class="news_image">
					<image src="../../static/img/new_image.png"></image>
				</view>
			</view>

		</view>


	</view>
	</view>


</template>

<script>
	export default {

		data() {
			return {

				imgUrls: ['https://www.hyxylwsfwzx.com/platform/img/img/banner1.jpg',
					'https://www.hyxylwsfwzx.com/platform/img/img/banner2.jpg',
					'https://www.hyxylwsfwzx.com/platform/img/img/banner3.jpg'
				]
			}
		},

		onShow() {},

		onLoad() {

		},
		methods: {


		}
	}
</script>

<style lang="scss">
	.slide-image {
		width: 100%;
	}


	.home_search {
		display: flex;
		margin-top: 10upx;
		margin-bottom: 10upx;
		text-align: center;
	}

	.home_search input {
		font-size: 12px;
	}

	.search_icon {
		margin: 10upx;
		width: 30upx;
		height: 30upx;
	}

	.tabs {
		display: flex;
		font-size: 12upx;
		margin: 20upx 0;
		box-shadow:0 16rpx 10rpx #EEEEEE ;
		padding-bottom:10rpx;
		border-bottom: 1px solid #EEEEEE;

	}

	.tab {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 20%;

	}

	.tab_icon {
		width: 60upx;
		height: 60upx;
	}

	.main {
		display: flex;
		font-size: 12upx;
		margin: 30upx 0;

	}

	.main_item {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 25%;

	}

	.main_item_icon {
		width: 60upx;
		height: 60upx;
	}

	.news {
		display: flex;
		margin-left: 40upx;
	}

	.news_icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120upx;

	}

	.news_icon image {
		width: 60upx;
		height: 60upx;
		padding-right: 20upx;
		border-right: solid 2upx #1ABB85;
	}

	.news_item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 12upx;
	}

	.news_item text {
		margin-left: 15upx;
	}

	.doctor_head {
		display: flex;
		justify-content: space-between;
		margin: 40upx;
	}

	.news_head {
		display: flex;
		justify-content: space-between;
		margin: 40upx;
	}

	.doctors {
		display: flex;
		font-size: 12upx;
		margin: 30upx 0;
	}

	.doctor {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 33%;
	}

	.doctor_img {
		border-radius: 50%;
		overflow: hidden;
	}

	.doctor image {
		width: 60upx;
		height: 60upx;
	}

	.news_image image {
		width: 200upx;
		height: 200upx;
	}
</style>
