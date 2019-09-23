import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import NotFoundPage from '../pages/not-found/not-found.page';
import LoginPage from '../pages/login/login.page';
import DashboardPage from '../pages/dashboard/dashboard.page';
import MovieDetail from '../components/movie-detail/movie-detail';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact />
                <PrivateRoute path="/movies" component={DashboardPage} exact />
                <PrivateRoute path="/movies/:id" component={MovieDetail} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
