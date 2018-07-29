const functions = require('firebase-functions');
const express = require('express');
const router = express.Router();

const firebase = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');

const app = express();

const firebaseApp = firebase.initializeApp({
  	credential: firebase.credential.cert(serviceAccount),
    apiKey: "AIzaSyD8nTIL85SpBMkXTZBqbo9Yl2rRueMo6bc",
    authDomain: "fir-api-75d5f.firebaseapp.com",
    databaseURL: "https://fir-api-75d5f.firebaseio.com",
    projectId: "fir-api-75d5f",
    storageBucket: "fir-api-75d5f.appspot.com",
    messagingSenderId: "941690371528"
});

app.use(require('./api/routes'));

exports.app = functions.https.onRequest(app);