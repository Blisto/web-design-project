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
  var account;
  var pwd;
  var registerSmtBtn;


// $('#SignUpBtn').ready(function(){

//     account = document.getElementById("ACCOUNT");
//     pwd = document.getElementById("PWD");
//     registerSmtBtn = document.getElementById("SignUpBtn");
//     registerSmtBtn.addEventListener("click", function(){
//             console.log(account.value);
//             JS:document.forms[0].target="rfFrame";
//         firebase.auth().createUserWithEmailAndPassword(account.value, pwd.value).catch(function(error) {
//         // Handle Errors here.
//         JQuery:$("#f2").attr("target","rfFrame");
//         var errorCode = error.code;
//         var errorMsg = error.message;
//         console.log(errorMsg);
//         });
//     },true);

// });

$(document).ready(function(){
//登入
var accountL = document.getElementById("ACCOUNT");
var pwdL = document.getElementById("PWD");
var loginSmtBtn = document.getElementById("SignUpBtn");
loginSmtBtn.addEventListener("click",function(){
  console.log(accountL.value);
  JS:document.forms[0].target="rfFrame";
	firebase.auth().signInWithEmailAndPassword(accountL.value, pwdL.value).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	console.log(errorMessage);
  })
},false);




//登出
var signoutSmtBtn = document.getElementById("signoutSmtBtn");
signoutSmtBtn.addEventListener("click",function(){
	firebase.auth().signOut().then(function() {
		console.log("User sign out!");
	}, function(error) {
  	console.log("User sign out error!");
	})
},false);



var user;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	user = user;
    console.log("User is logined", user)
  } else {
  	user = null;
    console.log("User is not logined yet.");
  }
});


});