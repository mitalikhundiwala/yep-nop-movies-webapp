import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyBrEJM9kvSIcNFAUE59B4KzvfvfgaF7Tyo",
  authDomain: "yep-nope-movies.firebaseapp.com",
  databaseURL: "https://yep-nope-movies.firebaseio.com",
  projectId: "yep-nope-movies",
  storageBucket: "yep-nope-movies.appspot.com",
  messagingSenderId: "468433325901",
  appId: "1:468433325901:web:0404021667325b3f31f104"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  firebase,
  facebookAuthProvider,
  googleAuthProvider,
  database as default
};

// database
//     .ref()
//     .set({
//         name: 'Mitali Patel',
//         age: 31,
//         isSingle: false,
//         location: {
//             city: 'Dubai',
//             country: 'UAE',
//         },
//     })
//     .then(() => {
//         console.log('Data is saved');
//     })
//     .catch((e) => {
//         console.log('This failed.', e);
//     });
