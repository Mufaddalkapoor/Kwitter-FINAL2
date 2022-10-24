//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD6EDRgOKmfzebFIEMvI-lCT40kEis-w_o",
      authDomain: "c-93-1fab3.firebaseapp.com",
      databaseURL: "https://c-93-1fab3-default-rtdb.firebaseio.com",
      projectId: "c-93-1fab3",
      storageBucket: "c-93-1fab3.appspot.com",
      messagingSenderId: "578549192986",
      appId: "1:578549192986:web:88222d6b56b0746045f4a3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
