import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
require('firebase/firestore');

// Initialize Firebase
firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyBaWA58XpnecLnuKAhzvNDQYMKMqBzk2OA",
  authDomain: "my-notes-5876c.firebaseapp.com",
  databaseURL: "https://my-notes-5876c.firebaseio.com",
  projectId: "my-notes-5876c",
  storageBucket: "my-notes-5876c.appspot.com",
  messagingSenderId: "740656993504",
  appId: "1:740656993504:web:030d657b23eda2d29fec85",
  measurementId: "G-D7MNBR0HVS"
})

firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
