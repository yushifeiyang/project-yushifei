import React, { Component } from 'react';
import {List,Button,Toast, InputItem} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class WXPay extends Component {
	constructor(props){
		super(props);
		this.state = {
			appid: '',
			partnerid: '',
			prepayid: '',
			noncestr: '',
			timestamp: '',
			package: '',
			sign: ''
		}

		this.onHandleFn = this.onHandleFn.bind(this);
	}
		onHandleFn(e) {
			console.log('e.target.value', e.target.value);
				this.setState({
					notShowLogin: e.target.value
				});
		}

    render() {
        return (
            <div>
                <List renderHeader={() => 'wxPay调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("wxPay", {
														appid : '',
														partnerid: '',
														prepayid: '',
														noncestr: '',
														timestamp: '',
														package: '',
														sign: ''
														},
														{ onSuccess:function (a) {
															
														}, onFail:function (a) {  
														
														}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<InputItem placeholder="appid" onChange={(e)=> {this.setState({appid: e});}}>appid :</InputItem>
												<InputItem placeholder="partnerid" onChange={(e)=> {this.setState({partnerid: e});}}>partnerid:</InputItem>
												<InputItem placeholder="prepayid" onChange={(e)=> {this.setState({prepayid: e});}}>prepayid:</InputItem>
												<InputItem placeholder="noncestr" onChange={(e)=> {this.setState({noncestr: e});}}>noncestr:</InputItem>
												<InputItem placeholder="timestamp" onChange={(e)=> {this.setState({timestamp: e});}}>timestamp: </InputItem>
											  <InputItem placeholder="package" onChange={(e)=> {this.setState({package: e});}}>package: </InputItem>							
												<InputItem placeholder="sign" onChange={(e)=> {this.setState({sign: e});}}>sign: </InputItem>								
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("wxPay", {
															appid : this.state.appid,
															partnerid: this.state.partnerid,
															prepayid: this.state.prepayid,
															noncestr: this.state.noncestr,
															timestamp: this.state.timestamp,
															package: this.state.package,
															sign: this.state.sign
														}, 
														{
														onSuccess:function (a) {
																Toast.success("成功" + JSON.stringify(a))
																console.log('wxPay res==', JSON.stringify(a))
														},
														onFail:function (a) {
																Toast.success("失败" + JSON.stringify(a))
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