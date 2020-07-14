import React, { Component } from 'react';
import {List,Button} from "antd-mobile"
const Item=List.Item
const Brief = Item.Brief;

class ShowLoading extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
            <div>
                <List renderHeader={() => 'showLoading调用'} className="my-list">
                    <Item>
											调用方式 
											<Brief style={{ whiteSpace: 'normal' }}>
												{
												`window.yl.call("showLoading", {
															content: '正在加载中…',
															duration: 15000
														},
														{ onSuccess:function (a) {}, 
															onFail:function (a) {}
													});`
														}
											</Brief>
                    </Item>
                    <Item>
                        入参 
												<Brief>content: 内容 (选填)</Brief>
												<Brief>duration: 持续时间-超时时长,单位ms,默认15000(15s) (选填)</Brief>
                    </Item>
                    <Item>
                       <Button onClick={() => {
													window.yl.call("showLoading", {
															content: '正在加载中…',
															duration: 15000
														}, 
														{
														onSuccess:function (a) {
																console.log('showLoading res==', a)
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
export default ShowLoading;