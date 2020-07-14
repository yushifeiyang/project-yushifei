! function () {
	var i = [{
		funName: "postRequest",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "chooseImage",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "closeWebview",
		param: !1,
		reFun: !1,
		staticType: 0
	}, {
		funName: "alert",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "confirmAlert",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "showActionSheet",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "showToast",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "showLoading",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "hideLoading",
		param: !1,
		reFun: !1,
		staticType: 0
	}, {
		funName: "getAuthcode",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "searchDevice",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "connectDevice",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "getUserInfo",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "payConform",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "clearDevice",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "wxPay",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "aliPay",
		param: !0,
		reFun: !0,
		staticType: 0
	}, {
		funName: "setTitleBarLeftButton",
		param: !0,
		reFun: !0,
		staticType: 0
	}];
	window.yl = {
		loaded: 0,
		readyType: 0,
		readyList: {},
		ua: window.navigator.userAgent,
		getSystemInfo: function () {
			var e = this.ua,
				a = {
					h5ContainerVersion: void 0,
					appVersion: void 0,
					systemId: void 0,
					appPlaform: void 0
				};
			try {
				a.h5ContainerVersion = e.split("ylh5ContainerVersion:")[1].split("&yl;")[0]
			} catch (e) {
				console.warn("获取容器版本错误")
			}
			try {
				a.appVersion = e.split("ylAppVersion:")[1].split("&yl;")[0]
			} catch (e) {
				console.warn("获取APP版本错误")
			}
			try {
				a.systemId = e.split("ylsystemId:")[1].split("&yl;")[0]
			} catch (e) {
				console.warn("获取渠道错误")
			}
			try {
				var n = -1 < e.indexOf("Android") || -1 < e.indexOf("Adr"),
					t = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
				n && (a.appPlaform = "Android"), t && (a.appPlaform = "iOS")
			} catch (e) {
				console.warn("获取APP平台错误")
			}
			return a
		},
		hasReady: function () {
			console.log("event ready!");
			var e = window.yl.readyList;
			for (var a in e) window.jsbridge.add(e[a]), delete window.yl.readyList[a]
		},
		readydo: function () {},
		ready: function (e) {
			this.readydo = e
		},
		call: function (e, a, n) {
			console.log("方法构造" + e + "==", a);
			var t = function (e) {
				for (var a = 0; a < i.length; a++) {
					var n = i[a];
					if (e === n.funName) return n
				}
				return !1
			}(e);
			if (!t) return console.log("非法调用"), !1;
			if (t.param && (t.param = a), t.reFun) {
				if (!n) return console.log("需要传入回调");
				t.reFun = n
			}
			if (window.jsbridge) window.jsbridge.add(t);
			else {
				var r = "ListItem" + (new Date).getTime();
				this.readyList[r] = t
			}
		}
	}, document.addEventListener("YLKJBrigeReady", function (e) {
		console.log("event ready!");
		var a = window.yl.readyList;
		for (var n in a) window.jsbridge.add(a[n]), delete window.yl.readyList[n]
	}, !1)
}();