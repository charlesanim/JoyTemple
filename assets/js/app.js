// Initialize Firebase
var config = {
  apiKey: "AIzaSyCHPklsQjc_9Uhayt2Vw6jwyzLTUHBgkAE",
  authDomain: "joytemple-34f86.firebaseapp.com",
  databaseURL: "https://joytemple-34f86.firebaseio.com",
  projectId: "joytemple-34f86",
  storageBucket: "joytemple-34f86.appspot.com",
  messagingSenderId: "664076663523"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
    console.log('Have permission');
    return messaging.getToken();
})
.then(function(token) {
console.log(token);
})

.catch(function(err) {
    console.log('Error Occured' , err);
})
