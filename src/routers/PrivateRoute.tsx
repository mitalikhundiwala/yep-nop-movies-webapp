import React, { FunctionComponent, Component, ComponentClass } from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";

import Header from "../components/header/header";

interface IProps extends RouteProps {
  isAuthenticated: boolean;
  component: FunctionComponent;
}

export const PrivateRoute: FunctionComponent<IProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth && !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
