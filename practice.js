//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB9E0-T7yBKi6FWWikEaCIw322Bl9I81ws",
    authDomain: "database-practice-activity.firebaseapp.com",
    databaseURL: "https://database-practice-activity-default-rtdb.firebaseio.com",
    projectId: "database-practice-activity",
    storageBucket: "database-practice-activity.appspot.com",
    messagingSenderId: "980595775374",
    appId: "1:980595775374:web:016156b8ecdd360ebb76df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }