import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/scss/bootstrap.scss";

import "./styles/styles.scss";
import LoadingPage from "./pages/loading/loading.page";
import { login, logout } from "./actions/auth";

import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";

import AppRouter, { history } from "./routers/AppRouter";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/movies");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
