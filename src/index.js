import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";

import "./styles/styles.scss";
import LoadingPage from "./pages/loading/loading.page";
import { login, logout } from "./actions/auth";

import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";

import AppRouter, { history } from "./routers/AppRouter";

import { startSetMovies } from "./actions/movies";

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

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
    const movies = await store.dispatch(startSetMovies());
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
