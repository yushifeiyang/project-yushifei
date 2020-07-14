import React, { Component } from 'react';
import {List,Button,Toast} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class PostRequest extends Component {
	constructor(props){
		super(props);
		this.state = {
			notShowLogin: '1'
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
                <List renderHeader={() => 'postRequest调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("postRequest", {
															service: 'core',
															api: 'token/getUserInfo',
															data: {}
														},
														{ onSuccess:function (a) {
															Toast.success("成功" + JSON.stringify(a)) 
														}, onFail:function (a) {  
															Toast.success("失败" + JSON.stringify(a))  
														}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief >service：""</Brief>
												<Brief >api：接口地址</Brief>
												<Brief >data：接口参数</Brief>
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("postRequest", {
															service: 'core',
															api: 'token/getUserInfo',
															data: {}
														}, 
														{
														onSuccess:function (a) {
																Toast.success("成功" + JSON.stringify(a))
																console.log('postRequest getUserInfo==', JSON.stringify(a))
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
export default PostRequest;