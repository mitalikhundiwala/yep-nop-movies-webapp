import { AuthAction } from "../actions/auth";

export interface IState {
  uid: string | undefined;
}

const defaultState: IState = { uid: undefined };

export default (state = defaultState, action): IState => {
  switch (action.type) {
    case AuthAction.LOGIN:
      return {
        uid: action.uid
      };
    case AuthAction.LOGOUT:
      return { uid: undefined };
    default:
      return state;
  }
};
