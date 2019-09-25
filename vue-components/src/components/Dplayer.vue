<template>
<div>
	<d-player :options="options"	ref="player"></d-player>
</div>
</template>
<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
	data () {
		return {
			options: {
				video: {
					url: '',
					pic: ''
				},
				autoplay: false,
				danmaku: true, // 弹幕
				apiBackend: {
						read: function (options) {
							console.log('Pretend to connect WebSocket')
						},
						send: function (options) {
							console.log('Pretend to send danamku via WebSocket', options.data)
						}
				}
			},
			player: null
		}
	},
	mounted () {
		this.player = this.$refs.player.dp
		// 默认全屏
		// this.player.fullScreen.request('web')
		// 切换播放其他视频
		this.player.switchVideo({
			url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
			pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
		})
		this.player.play()
	},
	methods: {
	},
  components: {
    'd-player': VueDPlayer
  }
}
</script>
<style  scoped>
</style>
