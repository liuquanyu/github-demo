<template>

	<view>
		<uni-segmented-control 
		:current="current" 
		:values="items.map(v=>v.title)" 
		@clickItem="onClickItem" style-type="text" 
		active-color="#4cd964">
		</uni-segmented-control>
		<view class="content"> 
			<view v-if="current === 0">
				<quanbu></quanbu>
			</view>
			<view v-if="current === 1">
				<xiangzhen></xiangzhen>
			</view>
			<view v-if="current === 2">
				<xianji></xianji>
			</view>
		</view>

	</view>



</template>

<script>
	import quanbu from "./quanbu/index.vue"
	import xiangzhen from "./xiangzhen/index.vue"
	import xianji from "./xianji/index.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"

	export default {

		components: {
			quanbu,
			xiangzhen,
			xianji,
			uniSegmentedControl
		},
		data() {
			return {				
				items: [
					{title:"全部" },
					{title:"乡镇医院" },
					{title:"县级医院" },										
					],
				current: 0
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}

	}
</script>


<style>


</style>
