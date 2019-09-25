import React, { Component } from 'react'
import { Switch, NavLink } from 'react-router-dom';
import RouteWithSubRoutes from '../../Router/route-with-sub-routes'

class PageRouter extends Component {
 render(){
	 return (
		 <div>
			 <h2>page router</h2>
				<ul>
						{this.props.routes.map((route, i) => {
								return (
										<li key={i}>
												<NavLink to={route.path}>{route.name}</NavLink>
										</li>
								)
						})}
				</ul>
				<div>
				 <Switch>
					 {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
				 </Switch>
				</div>
		 </div>
	 )
 }
}

export default PageRouter