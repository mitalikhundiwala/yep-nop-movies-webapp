import {
  firebase,
  facebookAuthProvider,
  googleAuthProvider
} from "../firebase/firebase";

export enum AuthAction {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

export const login = uid => ({
  type: AuthAction.LOGIN,
  uid
});

export const startLogin = () => {
  return () => {
    // return firebase.auth().signInWithPopup(facebookAuthProvider);
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type:  AuthAction.LOGOUT
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
