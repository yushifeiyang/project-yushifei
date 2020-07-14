import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class Alert extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'alert调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("alert", {
														title: '开启相机权限',
														content: '请在iPhone的“设置”-“隐私”-“相机”选项中，允许APP访问你的相机。',
														buttonText: '确定'
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief>title: '' (必填)</Brief>
												<Brief>content: '' (必填)</Brief>
												<Brief>buttonText: '' (选填,默认确定)</Brief>
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("alert", {
															title: '开启相机权限',
															content: '请在iPhone的“设置”-“隐私”-“相机”选项中，允许APP访问你的相机。',
															buttonText: '确定'
														}, 
														{
														onSuccess:function (a) {
																console.log('alert res==', a)
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
export default Alert;