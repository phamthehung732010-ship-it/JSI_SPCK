// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmyJpEjSOeTLkXo3qoewzIv62zopyqPg4",
  authDomain: "spck-e98c2.firebaseapp.com",
  projectId: "spck-e98c2",
  storageBucket: "spck-e98c2.firebasestorage.app",
  messagingSenderId: "231278579247",
  appId: "1:231278579247:web:82644e33c29095444680da",
  measurementId: "G-WFQR1KYEKS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();
