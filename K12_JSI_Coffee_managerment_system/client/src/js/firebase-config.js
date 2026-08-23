const firebaseConfig = {
  apiKey: "AIzaSyBrFQR9U__av6MQzV0_vB5pUtnxwZ3wDeA",
  authDomain: "firstproject-76752.firebaseapp.com",
  projectId: "firstproject-76752",
  storageBucket: "firstproject-76752.firebasestorage.app",
  messagingSenderId: "123095339400",
  appId: "1:123095339400:web:3914894e91c22e01a82a3d",
  measurementId: "G-9KBEDVK6K3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();
