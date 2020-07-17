<template>
<view>
	
	<view class="mine_item last_mine_item flex" @tap="exit">
	  <view class="flex">
	    <image src="../../static/img/head_portrait.png" mode="widthFix" class="mine_icon"></image>
	     张三
	  </view>
	  
	</view>


  <view class="mine_items">
	  
    <navigator url="../person_info/person_info" class="mine_item flex">
      <view class="flex">
        <image src="../../static/img/info.png" mode="widthFix" class="mine_icon"></image>
        个人信息
      </view>
      <image :src="img_url + 'subject_sel.png'" mode="widthFix" class="nav"></image>
    </navigator>
    <navigator url="../../static/img/patient_manage.png" class="mine_item flex">
      <view class="flex">
        <image src="../../static/img/patient_manage.png" mode="widthFix" class="mine_icon"></image>
        就诊人管理
      </view>
      <image :src="img_url + 'subject_sel.png'" mode="widthFix" class="nav"></image>
    </navigator>
    <navigator url="../../index/vis_list/vis_list" class="mine_item flex">
      <view class="flex">
        <image src="../../static/img/medical_history.png" mode="widthFix" class="mine_icon"></image>
        我的病史
      </view>
      <image :src="img_url + 'subject_sel.png'" mode="widthFix" class="nav"></image>
    </navigator>
	
	<navigator url="../../index/vis_list/vis_list" class="mine_item flex">
	  <view class="flex">
	    <image src="../../static/img/register.png" mode="widthFix" class="mine_icon"></image>
	    挂号记录
	  </view>
	  <image :src="img_url + 'subject_sel.png'" mode="widthFix" class="nav"></image>
	</navigator>
	<navigator url="../../index/vis_list/vis_list" class="mine_item flex">
	  <view class="flex">
	    <image src="../../static/img/vaccines.png" mode="widthFix" class="mine_icon"></image>
	    疫苗预约记录
	  </view>
	  <image :src="img_url + 'subject_sel.png'" mode="widthFix" class="nav"></image>
	</navigator>
	
	
	
	
    <view class="mine_item last_mine_item flex" @tap="exit">
      <view class="flex">
        <image src="../../static/img/about.png" mode="widthFix" class="mine_icon"></image>
        关于临澧健康
      </view>
      <image :src="img_url + 'subject_sel.png'" mode="widthFix" class="nav"></image>
    </view>
  </view>
</view>
</template>

<script>
const app = getApp();

export default {
  data() {
    return {
      img_url: 'https://www.hyxylwsfwzx.com/platform/img/img/',
      idcard: '',
      patname: "",
      show_idcard: ""
    };
  },

  components: {},
  props: {},

  onLoad() {
    var that = this;
    var idcard = wx.getStorageSync('idcard');
    var patname = wx.getStorageSync('patname');
    var show_idcard;
    show_idcard = idcard.substring(0, 1) + '**************' + idcard.substring(idcard.length - 1, idcard.length);
    console.log(idcard.substring(0, 1));
    console.log(idcard.substring(1, idcard.length - 1));
    console.log(idcard.substring(idcard.length - 1, idcard.length));
    console.log(idcard);
    console.log(show_idcard);
    that.setData({
      idcard,
      patname,
      show_idcard
    });
  },

  methods: {
    exit() {
      wx.showModal({
        title: '温馨提示',
        content: '您确定退出吗？',
        confirmColor: '#1abb85',
        success: function (res) {
          if (res.confirm) {
            wx.clearStorage();
            wx.showToast({
              title: '退出成功',
              icon: 'success',
              duration: 2000
            });
          }
        }
      });
    }

  }
};
</script>
<style lang="scss">
.auth_wrap{
  font-size:30rpx;
}
.bg{
  background: #1ABB85;
  width:100%;
  height:200rpx;
  position: absolute;
  z-index: -1;
}
.auth_con{
  width:90%;
  /* height:200rpx; */
  color:#999999;
  padding:20rpx 0;
  margin: 0 auto;
  background: #fff;
  border-radius: 20rpx;
  box-shadow: 0 0  5px #1ABB85;
}
.auth{
  width:50%;
  border-radius: 20rpx;
  color:#1ABB85;
  border:1rpx solid #1ABB85;
  background: #fff;
}
.auth_img{
  height:200rpx;
}
.auth{
  line-height:70rpx;
  font-size:30rpx;
  text-align:center;
  margin:0 auto;
}
.auth_title{
  font-size:30rpx;
  padding:0 0 20rpx 0;
}
.no_auth{
  position: relative;
}
.no_auth .auth_con{
  height:300rpx;  
  color:#fff;
  position: relative;  
  padding:20rpx;
}
.no_auth .top_con{
  position: absolute;
  top:20rpx;
  left:20rpx;
}
.no_auth .logo{
  width:40rpx;
  height:40rpx;
  border-radius: 50%;
  margin:0 10rpx 0 0;
}
.no_auth .is_auth{
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
}
.no_auth .bottom_con{
  position: absolute;
  bottom:20rpx;
  right:20rpx;
}
.mine_items{
  padding: 20rpx 0 0 0;
}
.mine_item{
  border-top:2rpx solid #F2F2F2;
}
.last_mine_item{
  border-bottom:2rpx solid #F2F2F2;  
}
.mine_icon{
  width:50rpx;
  margin:0 30rpx 0 0;
}
.nav{
  width:20rpx;
}
.mine_item{
  height:100rpx;
  justify-content: space-between;
  padding: 0 30rpx;
}
</style>