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
		component: Home
	},
	{
		path: "/test",
		component: Test
	},
	{
		path: "/propTypes",
		component: PropTypes
	},
	{
		path: "/pageRouter",
		component: PageRouter,
		routes: [
			{
				path: "/pageRouter/top",
				name: 'top component',
				component: Top
			},
			{
				path: "/pageRouter/bottom",
				name: 'bottom component',
				component: Bottom
			}
		]
	},
	{
		path: "/redux",
		component: PageRedux
	}
]

export default routes;