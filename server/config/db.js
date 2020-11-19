const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyD3oWlF8jKEYsxMK7Y4Uegan3eQ4NgcWL4',
  authDomain: 'reactnativeusersapp-61f16.firebaseapp.com',
  databaseURL: 'https://reactnativeusersapp-61f16.firebaseio.com',
  projectId: 'reactnativeusersapp-61f16',
  storageBucket: 'reactnativeusersapp-61f16.appspot.com',
  messagingSenderId: '33702797500',
  appId: '1:33702797500:web:9164410b035bd9bd12b0b9',
  measurementId: 'G-DLM1FQX7E0',
});

var db = firebase.firestore();

module.exports = db;
