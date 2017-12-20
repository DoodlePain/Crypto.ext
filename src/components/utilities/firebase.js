import * as firebase from 'firebase';

var database = {
  apiKey: <Your api key>,
  authDomain: <Your authDomain>,
  databaseURL: <Your databaseURL>,
  projectId: <Your projectId>,
  storageBucket: <Your storageBucket>,
  messagingSenderId: <Your messagingSenderId>
};
firebase.initializeApp(database);
