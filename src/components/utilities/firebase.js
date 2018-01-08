import * as firebase from 'firebase';

// Initialize Firebase
var database = {
  apiKey: "AIzaSyBixWIPRNq8BrN-zPzat4jU7urA2oKu1ok",
  authDomain: "public-test-db.firebaseapp.com",
  databaseURL: "https://public-test-db.firebaseio.com",
  projectId: "public-test-db",
  storageBucket: "public-test-db.appspot.com",
  messagingSenderId: "417106252205"
};
firebase.initializeApp(database);

// module.exports = database;