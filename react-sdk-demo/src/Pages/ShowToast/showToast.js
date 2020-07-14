import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class ShowToast extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'showToast调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("showToast", {
															content: '网络异常，请重新设置',
															duration:3000
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief>content: 内容 (非必填)</Brief>
												<Brief>duration: 持续时间-超时时长,单位ms  默认3000-3s (非必填)</Brief>
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("showToast", {
															content: '网络异常，请重新设置',
															duration:3000
														}, 
														{
														onSuccess:function (a) {
																console.log('showToast res==', a)
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
export default ShowToast;