var firebaseConfig = {
      apiKey: "AIzaSyAUUsqtxVyjTUdLCFyI0MO15xB9YLaymrU",
      authDomain: "kwitter-8029c.firebaseapp.com",
      databaseURL: "https://kwitter-8029c-default-rtdb.firebaseio.com",
      projectId: "kwitter-8029c",
      storageBucket: "kwitter-8029c.appspot.com",
      messagingSenderId: "289065526006",
      appId: "1:289065526006:web:d5108745704e302018c2d7",
      measurementId: "G-KT6LL2JC4P"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code

      //End code
      });});}
getData();
