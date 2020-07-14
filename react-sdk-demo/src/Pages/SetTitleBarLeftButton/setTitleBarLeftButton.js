import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class SetTitleBarLeftButton extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'setTitleBarLeftButton调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("setTitleBarLeftButton", {
															leftButtonShow : true ,
															leftButtonText : "返回1" ,
															leftButtonTextColor : "FF00FF00" ,
															leftButtonIcon : "icon-user" ,
															showCloseButton : true ,
															IsUseNativeBack : true
														},
														{ onSuccess:function (a) {}, 
														onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief style={{ whiteSpace: 'normal' }}>leftButtonShow : true</Brief>
												<Brief style={{ whiteSpace: 'normal' }}>leftButtonText : "返回1"</Brief>
												<Brief style={{ whiteSpace: 'normal' }}>leftButtonTextColor : "FF00FF00"</Brief>
												<Brief style={{ whiteSpace: 'normal' }}>leftButtonIcon : "icon-user"</Brief>
												<Brief style={{ whiteSpace: 'normal' }}>showCloseButton : true</Brief>
												<Brief style={{ whiteSpace: 'normal' }}>IsUseNativeBack : true</Brief>
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("setTitleBarLeftButton", {
															leftButtonShow : true ,
															leftButtonText : "返回1" ,
															leftButtonTextColor : "FF00FF00" ,
															leftButtonIcon : "icon-user" ,
															showCloseButton : true ,
															IsUseNativeBack : true
														}, 
														{
														onSuccess:function (a) {
																console.log('setTitleBarLeftButton res==', a);
														},
														onFail:function (a) {
																console.log("失败" , a);
														}
														})}
											 } type={"primary"}>调用测试</Button>
                    </Item>
                </List>
            </div>

        );
    }
}
export default SetTitleBarLeftButton;