import React, { Component } from 'react';
import {List,Button, InputItem} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class PayConform extends Component {
	constructor(props){
		super(props);
		this.state = {
			userNum:'',
			userName: ''
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'payConform调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("payConform", {
															userNum: '',
															userName: ''
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<InputItem placeholder="userNum" onChange={(e)=> {this.setState({userNum: e});}}>商户号:</InputItem>
												<InputItem placeholder="userName" onChange={(e)=> {this.setState({userName: e});}}>名称:</InputItem>
                    </Item>
                    <Item>
                        返回值 
												<Brief>data: 类型Object</Brief>
                    </Item>										
                    <Item>
                       <Button onClick={() => {
													window.yl.call("payConform", {
															userNum: this.state.userNum,
															userName: this.state.userName
														}, 
														{
														onSuccess:function (a) {
																console.log('payConform res==', a)
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
export default PayConform;