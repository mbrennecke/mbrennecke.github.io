import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import * as serviceWorker from './serviceWorker';

var config = {
		apiKey: "AIzaSyDpr5S5eaKzkMFysw5-pp6yO9YKAbY6REw",
		authDomain: "portfolio-contacts-930d4.firebaseapp.com",
		databaseURL: "https://portfolio-contacts-930d4.firebaseio.com",
		projectId: "portfolio-contacts-930d4",
		storageBucket: "",
		messagingSenderId: "601663076640"
	  };
	  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
