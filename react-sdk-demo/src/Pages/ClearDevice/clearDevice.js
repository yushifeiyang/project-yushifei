import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class ClearDevice extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'clearDevice调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("clearDevice", {
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief>无</Brief>
                    </Item>
                    <Item>
                        返回值 
												<Brief>data: 类型Object</Brief>
                    </Item>	
                    <Item>
                       <Button onClick={() => {
													window.yl.call("clearDevice", {
														}, 
														{
														onSuccess:function (a) {
																console.log('clearDevice res==', a)
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
export default ClearDevice;