import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class BottomComponent extends Component {
	constructor(props){
		super(props);

		this.handleBack = this.handleBack.bind(this);
	}

	handleBack(){
		// console.log('handleBack===', history);
		this.props.history.push('/');
		// history.push('/test');
	}

	render() {

		return (
			<>
				<h2>bottom 二级路由</h2>
				<p onClick={this.handleBack}>返回上一页</p>
			</>
			
		)
	}
}

export default withRouter(BottomComponent);