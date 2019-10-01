import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/styles.scss";
import LoadingPage from "./pages/loading/loading.page";
import { login, logout } from "./actions/auth";

import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";

import AppRouter, { history } from "./routers/AppRouter";
import UserAdapter from "./services/adapters/user.adapter";

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

firebase.auth().onAuthStateChanged(async response => {
  if (response) {
    const idToken = await response.getIdToken();
    const user = UserAdapter.fromFirebaseResponse(response);
    store.dispatch(login(user, idToken, response.refreshToken));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/movies");
    }
  } else {
    renderApp();
    history.push("/");
  }
});
