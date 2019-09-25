/**
 * 自定义 提示框( Toast )组件
 */
var Toast = {};
var showToast = false; // 存储toast显示状态
var toastVM = null; // 存储toast vm

Toast.install = function (Vue, options) {
  // 参数
  var opt = {
    defaultType: 'bottom',
    duration: '2500',
    wordWrap: false
  };
  for (var property in options) {
    opt[property] = options[property];
  }

  Vue.prototype.$toast = function (tips, type) {
		var curType;
		if (type) {
			curType = type;
		} else {
			curType = opt.defaultType;
		}
    var wordWrap = opt.wordWrap ? 'lx-word-wrap' : '';
    var style = opt.width ? 'style="width: ' + opt.width + '"' : '';
    var tmp = '<div v-show="show" :class="type" class="lx-toast ' + wordWrap + '" ' + style + '>{{tip}}</div>';

    if (showToast) {
      // 如果toast还在，则不再执行
      return;
    }
    if (!toastVM) {
      var ToastTpl = Vue.extend({
        data: function () {
          return {
            show: showToast,
            tip: tips,
            type: 'lx-toast-' + curType
          };
        },
        template: tmp
      });
      toastVM = new ToastTpl();
      var tpl = toastVM.$mount().$el;
      document.body.appendChild(tpl);
    }
    toastVM.type = 'lx-toast-' + curType;
    toastVM.tip = tips;
    toastVM.show = showToast = true;

    setTimeout(function () {
      toastVM.show = showToast = false;
    }, opt.duration);
  };

  ['bottom', 'center', 'top'].forEach(function (type) {
    Vue.prototype.$toast[type] = function (tips) {
      return Vue.prototype.$toast(tips, type);
    };
  });
};

// 向外暴露接口
module.exports = Toast;
