$(document).ready(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyBsJMxwhIgT_098MVwo65-wc9dod-luwZA",
    authDomain: "test-3932f.firebaseapp.com",
    databaseURL: "https://test-3932f.firebaseio.com",
    projectId: "test-3932f",
    storageBucket: "test-3932f.appspot.com",
    messagingSenderId: "397073964650",
    appId: "1:397073964650:web:e5856a945b8a8687"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var dbRef = firebase.database();

  const $email = $('#ACCOUNT');
  const $password = $('#PWD');
  const $btnSignIn = $('#SignUpBtn');
  //const $btnSignOut = $('#signoutSmtBtn');
  const $btnSubmit = $('#save-event');
  //const $signInfo = $('#sign-info');
  const $btnLogout = $('#signoutSmtBtn');
  //const avatarImage = $('.avatar-image');
  //const avatarName = $('.avatar-name');
  //const avatarEmail = $('.avatar-email');
  //$signInfo.html("");
  const $eventbox1=$('#event-1');
  const $eventbox2=$('#event-2');
  const $eventbox3=$('#event-3');
  const $eventbox4=$('#event-4');
  

  $btnSignIn.click(function (e) {
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    // signIn
    auth.signInWithEmailAndPassword(email,pass)
    .then(function (e) {
      window.location.href = "./information.html";
    })
    .catch(function (e) {
      console.log(e.message);
    });
  });


  $btnSubmit.click(function () {

    const user = firebase.auth().currentUser;

    console.log(user);
    dbRef.ref(user.uid+'/event1').set($eventbox1.val());
    dbRef.ref(user.uid+'/event2').set($eventbox2.val());
    dbRef.ref(user.uid+'/event3').set($eventbox3.val());
    dbRef.ref(user.uid+'/event4').set($eventbox4.val());

    console.log("Update successful.");
  });







    $btnLogout.click(function () {
      firebase.auth().signOut();
      console.log("Logout.");
      window.location.href = "./login.html";
    });
  


    




    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        console.log("i am bad man"+user.uid);
        dbRef.ref(user.uid+'/event1').once('value',function(snapshot){
          $eventbox1.val(snapshot.val());
        });
        dbRef.ref(user.uid+'/event2').once('value',function(snapshot){
          $eventbox2.val(snapshot.val());
        });
        dbRef.ref(user.uid+'/event3').once('value',function(snapshot){
          $eventbox3.val(snapshot.val());
        });
        dbRef.ref(user.uid+'/event4').once('value',function(snapshot){
          $eventbox4.val(snapshot.val());
        });
        user.providerData.forEach(function (profile) {
          console.log("  Provider-specific UID: " + profile.uid);
        });
        
      } else {
        console.log("not logged in");
      }
    });

});





// var signoutSmtBtn = document.getElementById("signoutSmtBtn");
// signoutSmtBtn.addEventListener("click",function(){
//     firebase.auth().signOut().then(function() {
//         console.log("User sign out!");
//     }, function(error) {
//     console.log("User sign out error!");
//     })
// },false);