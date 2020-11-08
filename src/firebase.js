import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCJJ8fBt4eSeJ6KSDD1N20cZsi27UyZABE",
  authDomain: "idobatakaigi-with-u5.firebaseapp.com",
  databaseURL: "https://idobatakaigi-with-u5.firebaseio.com",
  projectId: "idobatakaigi-with-u5",
  storageBucket: "idobatakaigi-with-u5.appspot.com",
  messagingSenderId: "294895325114",
  appId: "1:294895325114:web:0f47c1c37482ba48c7d783",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
