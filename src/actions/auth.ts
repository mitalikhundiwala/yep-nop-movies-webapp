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
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const loginWithFacebook = uid => ({
  type: AuthAction.LOGIN,
  uid
});

export const startLoginWithFacebook = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
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
