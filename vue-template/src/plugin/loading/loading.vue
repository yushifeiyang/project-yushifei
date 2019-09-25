<template>
	<div v-show="show" class="lx-load-mark">
		<div class="lx-load-box">
			<div class="lx-loading">
				<div class="loading_leaf loading_leaf_0"></div>
				<div class="loading_leaf loading_leaf_1"></div>
				<div class="loading_leaf loading_leaf_2"></div>
				<div class="loading_leaf loading_leaf_3"></div>
				<div class="loading_leaf loading_leaf_4"></div>
				<div class="loading_leaf loading_leaf_5"></div>
				<div class="loading_leaf loading_leaf_6"></div>
				<div class="loading_leaf loading_leaf_7"></div>
				<div class="loading_leaf loading_leaf_8"></div>
				<div class="loading_leaf loading_leaf_9"></div>
				<div class="loading_leaf loading_leaf_10"></div>
				<div class="loading_leaf loading_leaf_11"></div>
			</div>
			<div class="lx-load-content">{{info}}</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			show: false,
			info: ''
		};
	},
  methods: {
    open () {
      this.show = true;
    },
    close () {
      this.show = false;
		},
		setInfo (val) {
			this.info = val;
		}
  }
};
</script>
<style lang="scss" scoped>
.lx-load-mark {
  position: fixed;
  left: 0;
  top: 0;
	bottom: 0;
	right: 0;
  z-index: 9999;
}

.lx-load-box {
	padding-top: 48%;
}

.lx-load-content {
	font-size: 14px;
	padding: 10px 0;
	text-align: center;
}

.lx-loading {
	position: relative;
	width: 80px;
	height: 80px;
	margin:  0 auto;
}

.loading_leaf {
  position: absolute;
	top: 50%;
	left: 50%;
  width: 20px;
  height: 6px;
  background: #d1d1d5;
  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;
  border-radius: 1px;
  -webkit-transform-origin: 0 0;
  transform-origin:0 0;
  opacity: 0.25;
}
@mixin trasformItem() {
	@for $i from 0 through 11 {
		.loading_leaf_#{$i} {
			-webkit-animation: opacity-#{$i} 1.25s linear infinite;
			animation: opacity-#{$i} 1.25s linear infinite;
			-webkit-transform: rotate(#{30 * $i}deg) translate(16px, 0px);
			transform: rotate(#{30 * $i}deg) translate(16px, 0px);
		}
	}
}
@include trasformItem();

@mixin animateItem{
	@for $i from 0 through 11{
		@-webkit-keyframes opacity-#{$i} {
			0% {opacity: 0.25;}
			@if $i < 5 {
				#{$i*8.333333}%{
					opacity: 0.25;
				}
				#{$i*8.333333+0.001}%{
					opacity: 1;
				}
				#{$i*8.333333+60}%{
					opacity: 0.25;
				}
			}@else{
				#{$i*8.333333}%{
					opacity: 0.25;
				}
				#{$i*8.333333+0.001}%{
					opacity: 1;
				}
				#{$i*8.333333-40}%{
					opacity: 0.25;
				}
			}
			100% {opacity: 0.25;}
		}
		@keyframes opacity-#{$i} {
			0% {opacity: 0.25;}
			@if $i < 5{
				#{$i*8.333333}%{
					opacity: 0.25;
				}
				#{$i*8.333333+0.001}%{
					opacity: 1;
				}
				#{$i*8.333333+60}%{
					opacity: 0.25;
				}
			}@else{
				#{$i*8.333333}%{
					opacity: 0.25;
				}
				#{$i*8.333333+0.001}%{
					opacity: 1;
				}
				#{$i*8.333333-40}%{
					opacity: 0.25;
				}
			}
			100% {opacity: 0.25;}
		}
	}
}
@include animateItem();

</style>
