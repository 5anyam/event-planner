import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA4rL6N1r_uV5eXG_Bm6PaVoFXCPENcObA",
  authDomain: "doyenclub-san.firebaseapp.com",
  databaseURL: "https://doyenclub-san.firebaseio.com",
  projectId: "doyenclub-san",
  storageBucket: "doyenclub-san.appspot.com",
  messagingSenderId: "394595773543",
  appId: "1:394595773543:web:19eb1e2a28b9ef649fb8c2",
  measurementId: "G-VEETD7LF38"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;