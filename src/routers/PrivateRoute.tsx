import React, { FunctionComponent, Component, ComponentClass } from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";

import Header from "../components/header/header";
import { IStore } from "../store/configureStore";

interface IProps extends RouteProps {
  isAuthenticated: boolean;
  component: FunctionComponent;
}

export const PrivateRoute: FunctionComponent<IProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <div>
            <Header />
            <div className="container-fluid">
              <div className="row">
                <Component {...props} />
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = (state: IStore) => ({
  isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(PrivateRoute);
