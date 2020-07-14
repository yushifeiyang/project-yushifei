import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class ConfirmAlert extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'confirmAlert调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("confirmAlert", {
														title: '开启相机权限',
														content: '请在iPhone的“设置”-“隐私”-“相机”选项中，允许APP访问你的相机。',
														leftButtonText: '取消',
														rightButtonText: '去设置'
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief>title: ''  (非必填)</Brief>
												<Brief>content: ''  (必填)</Brief>
												<Brief>leftButtonText: ''  (非必填,左边按钮, 默认取消)</Brief>
												<Brief>rightButtonText: ''  (非必填,右边按钮,默认确定)</Brief>
                    </Item>
                    <Item>
                        返回值
												<Brief>leftButtonClick:Boolean,（是否被点击,Native关闭弹框，由H5业务决定做什么）</Brief>
												<Brief>rightButtonClick:Boolean,（是否被点击,Native关闭弹框，由H5业务决定做什么）</Brief>
                    </Item>										
                    <Item>
                       <Button onClick={() => {
													window.yl.call("confirmAlert", {
															title: '开启相机权限',
															content: '请在iPhone的“设置”-“隐私”-“相机”选项中，允许APP访问你的相机。',
															leftButtonText: '取消',
															rightButtonText: '去设置'
														}, 
														{
														onSuccess:function (a) {
																console.log('confirmAlert res==', a)
														},
														onFail:function (a) {
																console.log("失败", a)
														}
														})}
											 } type={"primary"}>调用测试</Button>
                    </Item>
                </List>
            </div>

        );
    }
}
export default ConfirmAlert;