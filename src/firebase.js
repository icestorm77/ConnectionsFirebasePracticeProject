import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAN4Yc5gDZmDYqMJq_cBHkZFN1UdQvbheM",
    authDomain: "connectionsfirebasepracproject.firebaseapp.com",
    databaseURL: "https://connectionsfirebasepracproject.firebaseio.com",
    projectId: "connectionsfirebasepracproject",
    storageBucket: "connectionsfirebasepracproject.appspot.com",
    messagingSenderId: "532353088186",
    appId: "1:532353088186:web:06e83081fa49ef7264a083"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);