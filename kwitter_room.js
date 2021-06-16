
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDihA9JdQ8i2df4pQ5LwrDGw2fgAMQOzLU",
      authDomain: "kwitter-chetan.firebaseapp.com",
      databaseURL: "https://kwitter-chetan-default-rtdb.firebaseio.com",
      projectId: "kwitter-chetan",
      storageBucket: "kwitter-chetan.appspot.com",
      messagingSenderId: "1027670860670",
      appId: "1:1027670860670:web:936fc797bfcd786ea6892f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !! ";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose : "Adding Room Name" 
          }) ;
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
          }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name : " + Room_names);
    row = "<div class='room_name' id = " + Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();
 
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
