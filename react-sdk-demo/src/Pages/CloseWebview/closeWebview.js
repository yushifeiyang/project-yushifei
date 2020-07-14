import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class CloseWebview extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}


    render() {
        return (
            <div>
                <List renderHeader={() => 'closeWebview调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("closeWebview");`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参<Brief style={{ whiteSpace: 'normal' }}>无</Brief>					
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("closeWebview")}
											 } type={"primary"}>调用测试</Button>
                    </Item>
                </List>
            </div>

        );
    }
}
export default CloseWebview;