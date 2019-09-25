import React, { Component } from 'react'
import { connect } from 'react-redux';

class Home extends Component {
 render(){
	 return (
		 <div>
			 <h2>主页</h2>
			 <p>这里显示state里的值：
				 <span style={{color:"#f00"}}>{this.props.todos}</span>
				</p>
		 </div>
	 )
 }
}

const mapStateToProps = (state) => {
	return {
		todos: state.pageTitle
	};
};


export default connect(mapStateToProps)(Home)