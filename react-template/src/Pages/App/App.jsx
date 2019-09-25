import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
import './App.css';
import routes from '../../Router/index';
import RouteWithSubRoutes from '../../Router/route-with-sub-routes'

class App extends Component {
	render () {
		return (
			<Router>
				<ul>
					<li>
						<NavLink exact to="/">Home</NavLink>
					</li>
					<li>
						<NavLink exact to="/test">Test</NavLink>
					</li>
					<li>
						<NavLink to="/pageRouter">pageRouter</NavLink>
					</li>
					<li>
						<NavLink to="/redux">pageRedux</NavLink>
					</li>
				</ul>
				<Switch>
					{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
				</Switch>
			</Router>
		)
	}
}

export default App;
