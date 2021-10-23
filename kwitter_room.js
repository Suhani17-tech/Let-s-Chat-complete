const firebaseConfig = {
    apiKey: "AIzaSyDf8q3G9SZQXPu05owAkE9P9fXpBiIvqHY",
    authDomain: "project-94-88f02.firebaseapp.com",
    databaseURL: "https://project-94-88f02-default-rtdb.firebaseio.com",
    projectId: "project-94-88f02",
    storageBucket: "project-94-88f02.appspot.com",
    messagingSenderId: "352250698754",
    appId: "1:352250698754:web:d3e2e6c078941d06209b1b"
  };

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML= "Welcome "+ user_name+ " !";
 

  function add_room(){
   room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
    resoure: "This is the room name"
    });

    localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) 
  {
    document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log(Room_names);

row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
});});}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);

      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}