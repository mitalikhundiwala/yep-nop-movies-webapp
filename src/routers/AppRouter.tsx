import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastProvider } from "react-toast-notifications";

import NotFoundPage from "../pages/not-found/not-found.page";
import LoginPage from "../pages/login/login.page";
import DashboardPage from "../pages/dashboard/dashboard.page";
import MovieDetailPage from "../pages/movie-detail/movie-detail.page";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <ToastProvider>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/movies" component={DashboardPage} exact />
        <PrivateRoute path="/movies/:id" component={MovieDetailPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </ToastProvider>
  </Router>
);

export default AppRouter;
