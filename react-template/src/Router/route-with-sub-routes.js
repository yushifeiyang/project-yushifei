import React from 'react';
import {Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}  history={history}/>
        )}
    />
);
export default RouteWithSubRoutes