import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class ShowActionSheet extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'showActionSheet调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("showActionSheet", {
															title: '开启相机权限',
															items: ['第一个选项', '第二个选项', '第三个选项'],
															cancelButtonText: '取消'
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief>title: 标题 (非必填)</Brief>
												<Brief>items: 内容,菜单按钮的文字数组</Brief>
												<Brief>cancelButtonText: 取消按钮(默认取消) (非必填)</Brief>
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("showActionSheet", {
															title: '开启相机权限',
															items: ['第一个选项', '第二个选项', '第三个选项'],
															cancelButtonText: '取消'
														}, 
														{
														onSuccess:function (a) {
																console.log('showActionSheet res==', a)
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
export default ShowActionSheet;