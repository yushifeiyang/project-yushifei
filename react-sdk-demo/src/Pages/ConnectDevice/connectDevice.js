import React, { Component } from 'react';
import {List,Button, InputItem} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class ConnectDevice extends Component {
	constructor(props){
		super(props);
		this.state = {
			device: ''
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'connectDevice调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("connectDevice", {
														device: 从searchDevice方法获取
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief>device:参数从searchDevice方法获取</Brief>
												<InputItem placeholder="device" onChange={(e)=> {this.setState({device: e});}}>device:</InputItem>
                    </Item>
                    <Item>
                        返回值 
												<Brief>authCode:用户token</Brief>
                    </Item>										
										
                    <Item>
                       <Button onClick={() => {
													window.yl.call("connectDevice", {
															device: this.state.device
														}, 
														{
														onSuccess:function (a) {
																console.log('connectDevice res==', a)
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
export default ConnectDevice;