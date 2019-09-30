import { AuthAction } from "../actions/auth";
import User from "../models/user";

export interface IState {
  user: User | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

const defaultState: IState = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined
};

export default (state = defaultState, action): IState => {
  switch (action.type) {
    case AuthAction.LOGIN:
      return {
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      };
    case AuthAction.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
