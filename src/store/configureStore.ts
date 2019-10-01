import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Store
} from "redux";
import thunk from "redux-thunk";

import authReducer, { IState as IStateAuth } from "../reducers/auth";
import moviesReducer, { IState as IStateMovies } from "../reducers/movies";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface IStore {
  auth: IStateAuth;
  movies: IStateMovies;
}

export default (): Store<IStore> => {
  const store = createStore(
    combineReducers({ auth: authReducer, movies: moviesReducer }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
