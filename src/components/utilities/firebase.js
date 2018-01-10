import * as firebase from 'firebase';

var database = {
  apiKey: <Your api="api" key="key">, authDomain:
    <Your authDomain="authDomain">, databaseURL:
      <Your databaseURL="databaseURL">, projectId:
        <Your projectId="projectId">, storageBucket:
          <Your storageBucket="storageBucket">, messagingSenderId:
            <Your messagingSenderId="messagingSenderId">
              };
firebase.initializeApp(database);