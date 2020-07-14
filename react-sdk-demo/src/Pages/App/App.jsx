import React, { Component } from 'react';
import { HashRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import routes from '../../Router/index';
import RouteWithSubRoutes from '../../Router/route-with-sub-routes'
import 'antd-mobile/dist/antd-mobile.css';

class App extends Component {
	render () {
		return (
			<Router>
				<Switch>
					{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
				</Switch>
			</Router>
		)
	}
}

export default App;
