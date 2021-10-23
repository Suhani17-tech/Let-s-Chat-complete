
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
    room_name=localStorage.getItem("room_name");


    function send(){
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
     message: msg,
     name: user_name,
     like: 0
});
document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         
         message_data = childData;
         name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_with_tag="<h4>"+ name1+" <img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+ message +"</h4>";
like_button="<button id="+ firebase_message_id +" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+ "</span></button><hr>";
row= name_with_tag+ message_with_tag+like_button+span_with_tag;

document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id) {
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes= Number(likes)+ 1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
  });
}
