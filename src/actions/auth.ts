import {
  firebase,
  facebookAuthProvider,
  googleAuthProvider
} from "../firebase/firebase";
import User from "../models/user";

export enum AuthAction {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

export const login = (
  user: User,
  accessToken: string,
  refreshToken: string
) => ({
  type: AuthAction.LOGIN,
  payload: {
    user,
    accessToken,
    refreshToken
  }
});

export const startLoginWithFacebook = () => {
  return async () => {
    const result = await firebase.auth().signInWithPopup(facebookAuthProvider);
    return result;
  };
};

export const logout = () => ({
  type: AuthAction.LOGOUT
});

export const startLogout = () => {
  return dispatch => {
    dispatch(logout());
    return firebase.auth().signOut();
  };
};
