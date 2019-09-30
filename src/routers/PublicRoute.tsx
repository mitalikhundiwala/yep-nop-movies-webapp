import React, { ComponentClass, FunctionComponent } from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { IStore } from "../store/configureStore";

interface IProps extends RouteProps {
  isAuthenticated: boolean;
  component: FunctionComponent;
}

export const PublicRoute: FunctionComponent<IProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? <Redirect to="/movies" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state: IStore) => ({
  isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(PublicRoute);
