
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDnTkL7wQUaCTqLKA0IzXfBBe2dpQ8ol_Q",
    authDomain: "chathut-a385f.firebaseapp.com",
    databaseURL: "https://chathut-a385f-default-rtdb.firebaseio.com",
    projectId: "chathut-a385f",
    storageBucket: "chathut-a385f.appspot.com",
    messagingSenderId: "87132668714",
    appId: "1:87132668714:web:807ecc727ee6dc371d1453",
    measurementId: "G-PMD516TQPY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function set_name(){
      localStorage.setItem("welcome");
      document.getElementById("welcome").innerHTML = "welcome"+ user_name;
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
    
      //End code
      });});}
getData();

 function  add_room(){
       room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      })
      localStorage.setItem("room_name" , room_name);
      window.location = "chathut_room.html";
 }

function redirectToRoomName(name){
      localStorage.setItem("room_name" , name);
      window.location = "chathut_page.html";
}