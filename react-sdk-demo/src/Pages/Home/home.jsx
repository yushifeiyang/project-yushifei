import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';
import { List } from "antd-mobile";
import Router from "../../Router";
const Item = List.Item
const Brief = Item.Brief;


class Home extends Component {
 render(){
	 return (
			<div className={"home"}>
					<List renderHeader={() => 'SDK demo'} className="my-list">
						{
							Router.map(v => (
								<Item arrow="horizontal" multipleLine  key={v.fnName}>
 									<NavLink to={v.path}>{v.fnName} <Brief>{v.fnContent}</Brief></NavLink>
								</Item>
							))
						}
					</List>
			</div>
	 )
 }
}




export default Home