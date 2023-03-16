const firebaseConfig = {
    apiKey: "AIzaSyBAtR2EiM57-yZvNKYgzC-SIIkXp3SAdMk",
    authDomain: "lets-chat-e55ea.firebaseapp.com",
    projectId: "lets-chat-e55ea",
    storageBucket: "lets-chat-e55ea.appspot.com",
    messagingSenderId: "271481755625",
    appId: "1:271481755625:web:797bd718a747b12b351d78",
    measurementId: "G-K2ZJ4NF904"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();