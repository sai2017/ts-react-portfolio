import * as firebase from 'firebase/app';
import 'firebase/auth'

export const config = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "ts-react-portfolio.firebaseapp.com",
    databaseURL: "https://ts-react-portfolio.firebaseio.com",
    projectId: "ts-react-portfolio",
    storageBucket: "ts-react-portfolio.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// firebase.initializeApp(config)

export default firebase