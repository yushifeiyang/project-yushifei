import React from 'react'
import PropTypes from 'prop-types';
class Son extends React.Component {
	static propTypes ={
		number: PropTypes.array
	}
	render() {
		return (
		<div style={{ padding: 30 }}>
			{this.props.number}
		</div>)
	}
}

class Father extends React.Component {
	render() {
		//分别渲染数字的11和字符串的11
		return (<div>
			<Son number={[1]} />
		</div>)
	}
}
export default Father