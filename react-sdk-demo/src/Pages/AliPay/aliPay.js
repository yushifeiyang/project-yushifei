import React, { Component } from 'react';
import {List,Button,InputItem} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class WXPay extends Component {
	constructor(props){
		super(props);
		this.state = {
			orderStr: ''
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'aliPay调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("aliPay", {
														orderStr: ''
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<InputItem placeholder="orderStr" onChange={(e)=> {this.setState({orderStr: e});}}>orderStr :</InputItem>
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("aliPay", {
															orderStr: this.state.orderStr
														}, 
														{
														onSuccess:function (a) {
																console.log('aliPay res==', a)
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
export default WXPay;