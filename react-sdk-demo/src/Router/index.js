import Home from '../Pages/Home/home';
import ChooseImage from '../Pages/ChooseImage/ChooseImage.js';
import PostRequest from '../Pages/PostRequest/PostRequest.js';
import WXPay from '../Pages/WXPay/WXPay.js';
import AliPay from '../Pages/AliPay/aliPay.js';
import CloseWebview from '../Pages/CloseWebview/closeWebview.js';
import SetTitleBarLeftButton from '../Pages/SetTitleBarLeftButton/setTitleBarLeftButton.js';
import Alert from '../Pages/Alert/alert.js';
import ConfirmAlert from '../Pages/ConfirmAlert/confirmAlert.js';
import GetAuthcode from '../Pages/GetAuthcode/getAuthcode.js';
import HideLoading from '../Pages/HideLoading/hideLoading.js';
import ShowLoading from '../Pages/ShowLoading/showLoading.js';
import ShowActionSheet from '../Pages/ShowActionSheet/showActionSheet.js';
import ShowToast from '../Pages/ShowToast/showToast.js';
import SearchDevice from '../Pages/SearchDevice/searchDevice.js';
import ConnectDevice from '../Pages/ConnectDevice/connectDevice.js';
import GetUserInfo from '../Pages/GetUserInfo/getUserInfo.js';
import PayConform from '../Pages/PayConform/payConform.js';
import ClearDevice from '../Pages/ClearDevice/clearDevice.js';


const routes = [
	{
		path: "/",
    exact: true,
		component: Home,
		fnName: 'Home',
		fnContent: '首页'
	},
	{
		path: "/chooseImage",
		exact: true,
		component: ChooseImage,
		fnName: 'ChooseImage',
		fnContent: '唤起拍照或从⼿手机相册中选择图⽚片'
	},
	{
		path: "/postRequest",
		exact: true,
		component: PostRequest,
		fnName: 'PostRequest',
		fnContent: '接口请求，返回数据'
	},
	{
		path: "/wxPay",
		exact: true,
		component: WXPay,
		fnName: 'wxPay',
		fnContent: '微信支付'
	},
	{
		path: "/closeWebview",
		exact: true,
		component: CloseWebview,
		fnName: 'closeWebview',
		fnContent: '关闭webview'
	},
	{
		path: "/aliPay",
		exact: true,
		component: AliPay,
		fnName: 'aliPay',
		fnContent: '支付宝支付'
	},
	{
		path: "/setTitleBarLeftButton",
		exact: true,
		component: SetTitleBarLeftButton,
		fnName: 'setTitleBarLeftButton',
		fnContent: '设置标题左按钮'
	},
	{
		path: "/alert",
		exact: true,
		component: Alert,
		fnName: 'alert',
		fnContent: 'alert单按钮弹框'
	},
	{
		path: "/confirmAlert",
		exact: true,
		component: ConfirmAlert,
		fnName: 'confirmAlert',
		fnContent: 'confirmAlert带取消-确认按钮弹框'
	},
	{
		path: "/getAuthcode",
		exact: true,
		component: GetAuthcode,
		fnName: 'getAuthcode',
		fnContent: '获取用户authCode'
	},
	{
		path: "/hideLoading",
		exact: true,
		component: HideLoading,
		fnName: 'hideLoading',
		fnContent: '隐藏进度条/菊花loading弹框'
	},
	{
		path: "/showLoading",
		exact: true,
		component: ShowLoading,
		fnName: 'showLoading',
		fnContent: '加载进度条/菊花loading弹框'
	},
	{
		path: "/showToast",
		exact: true,
		component: ShowToast,
		fnName: 'showToast',
		fnContent: '加载进度条/菊花loading弹框'
	},
	{
		path: "/showActionSheet",
		exact: true,
		component: ShowActionSheet,
		fnName: 'showActionSheet',
		fnContent: 'actionSheet弹框-底部弹列表框'
	},
	{
		path: "/searchDevice",
		exact: true,
		component: SearchDevice,
		fnName: 'searchDevice',
		fnContent: '搜索设备'
	},
	{
		path: "/connectDevice",
		exact: true,
		component: ConnectDevice,
		fnName: 'connectDevice',
		fnContent: '选择设备并连接'
	},
	{
		path: "/getUserInfo",
		exact: true,
		component: GetUserInfo,
		fnName: 'getUserInfo',
		fnContent: '输入金额查询用户信息'
	},
	{
		path: "/payConform",
		exact: true,
		component: PayConform,
		fnName: 'payConform',
		fnContent: '充值确认'
	},
	{
		path: "/clearDevice",
		exact: true,
		component: ClearDevice,
		fnName: 'clearDevice',
		fnContent: '清理设备接口'
	}
]

export default routes;