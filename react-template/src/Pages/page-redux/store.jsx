import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../../Redux/action/action'
import { withRouter } from "react-router-dom";

class PageRedux extends Component {
	componentDidMount() {
		let { setPageTitle, setInfoList } = this.props
		console.log(this.props);

		// 触发setPageTitle action
		setPageTitle('新的标题')

		// 触发setInfoList action
		this.getData(setInfoList)
	}

	getData(setInfoList) {
		window.fetch('http://192.30.255.111:8300/DB/getDataFromGet', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			return res.json()
		}).then(res1 => {
			if (res1.code === 0) {
				setInfoList(res1.data)
			}
		})
	}

	render(){
		let { pageTitle, infoList } = this.props
		return (
			<div>
				<h1>{pageTitle}</h1>
				{
					infoList
				}
				<p onClick={() => {
					this.props.history.push('/');
				}}>返回首页</p>
			</div>
		)
	}
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
	console.log('state 1=', state);

	return {
		pageTitle: state.pageTitle,
		infoList: state.infoList
	}
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setPageTitle:function(data) {
			dispatch(setPageTitle(data))
		},
		setInfoList(data) {
			dispatch(setInfoList(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageRedux));
