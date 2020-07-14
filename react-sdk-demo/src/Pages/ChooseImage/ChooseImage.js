import React, { Component } from 'react';
import {List,Button,Toast} from "antd-mobile"
const Item=List.Item;
const Brief = Item.Brief;

class ChooseImage extends Component{
    render() {
        return (
            <div>
                <List renderHeader={() => 'ChooseImage调用'} className="my-list">
                    <Item>
                        调用方式 <Brief style={{whiteSpace: 'normal'}}> {'window.yl.call("chooseImage",{uploadTarget:"qiniu",type:"head"},{onSuccess:function (a) {Toast.success("成功" + JSON.stringify(a))},onFail:function (a) {Toast.success("失败" + JSON.stringify(a))}});'}</Brief>
                    </Item>
                    <Item>
                        入参<Brief>
                        uploadTarget:"qiniu"||"pictureServer"
                        type上传类型“head”: 头像照片“idcd”: 身份证照片“cert”: 其他证件“face”: 人脸识别“temp”: 临时文件“othe”: 其他文件
                    </Brief>
                    </Item>
                    <Item>
                       <Button onClick={() => {window.yl.call("chooseImage", {
                           uploadTarget:"qiniu",
                           type:"head",
                       },{
                           onSuccess:function (a) {
                               Toast.success("成功" + JSON.stringify(a))
                           },
                           onFail:function (a) {
                               Toast.success("失败" + JSON.stringify(a))
                           }
                       })}} type={"primary"}>调用测试</Button>
                    </Item>
                </List>
            </div>

        );
    }
}
export default ChooseImage;