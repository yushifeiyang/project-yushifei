import Home from '../Pages/Home/home';
import Test from '../Pages/demo';
import PropTypes from '../Pages/PropTypes/propTypes';
import PageRouter from '../Pages/page-router/page-router'
import Top from '../Pages/page-router/Top/top';
import Bottom from '../Pages/page-router/Bottom/bottom';
import PageRedux from '../Pages/page-redux/store';

const routes = [
	{
		path: "/",
		exact: true,
		component: Home
	},
	{
		path: "/test",
		exact: true,
		component: Test
	},
	{
		path: "/propTypes",
		exact: true,
		component: PropTypes
	},
	{
		path: "/pageRouter",
		component: PageRouter,
		routes: [
			{
				path: "/pageRouter/top",
				name: 'top component',
				exact: true,
				component: Top
			},
			{
				path: "/pageRouter/bottom",
				name: 'bottom component',
				exact: true,
				component: Bottom
			}
		]
	},
	{
		path: "/redux",
		exact: true,
		component: PageRedux
	}
]

export default routes;