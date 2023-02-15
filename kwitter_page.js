const firebaseConfig = {
      apiKey: "AIzaSyAJxVbnZ4HOcNImVEx1Aso-hYU43zVoF0c",
      authDomain: "aaaaaaa-96da8.firebaseapp.com",
      databaseURL: "https://aaaaaaa-96da8-default-rtdb.firebaseio.com",
      projectId: "aaaaaaa-96da8",
      storageBucket: "aaaaaaa-96da8.appspot.com",
      messagingSenderId: "71645859802",
      appId: "1:71645859802:web:2e694e646c514f41d33ae3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");room_name=localStorage.getItem("room_name");
   function send(){
      var msg=document.getElementById("msg").value ;
firebase.database().ref(room_name).push({
name: user_name,
msg:msg,
like:0

});
document.getElementById("msg").value="";

   }
   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
