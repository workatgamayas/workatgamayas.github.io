var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
  apiKey: "AIzaSyD5LN1-4gJr3UQpzDJWsu1oMWbcUaZseOA",
  authDomain: "gma-web.firebaseapp.com",
  databaseURL: "https://gma-web.firebaseio.com",
  projectId: "gma-web",
  storageBucket: "gma-web.appspot.com",
  messagingSenderId: "547453412977",
  appId: "1:547453412977:web:d35e1253e20df65e831dd0"
};
  // Initialize Firebase
  
  if(!hasInit){
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
}