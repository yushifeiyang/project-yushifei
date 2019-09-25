import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './static/css/index.css';
import App from './Pages/App/App';
import store from './Redux/index'

ReactDOM.render(
<Provider store={store}>
	<App />
</Provider>
, document.getElementById('root'));
