// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCLWC07mKPMycFq3ERJ2lU4zTbz5wN-jYw",
    authDomain: "let-s-chat-web-app-b41b8.firebaseapp.com",
    projectId: "let-s-chat-web-app-b41b8",
    storageBucket: "let-s-chat-web-app-b41b8.appspot.com",
    messagingSenderId: "528310520749",
    appId: "1:528310520749:web:7e53afe3592b683bb8af24",
    measurementId: "G-RPVEDDMQ50"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



