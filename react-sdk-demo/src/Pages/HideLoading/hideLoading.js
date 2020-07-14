import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class HideLoading extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'hideLoading调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("hideLoading");`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief>无</Brief>
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("hideLoading")
												}
											 } type={"primary"}>调用测试</Button>
                    </Item>
                </List>
            </div>

        );
    }
}
export default HideLoading;