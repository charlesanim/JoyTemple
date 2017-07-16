importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');

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

firebase.initializeApp({
  'messagingSenderId': '664076663523'
});

const messaging = firebase();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  //notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
  body: 'Background Message body.',
  icon: 'assets/img/logo.png'
};

return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a sevice worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.onMessage(function(payload) {
  console.log("Message received. ", payload);
  // ...
});

https://fcm.googleapis.com/fcm/send
Content-Type: application/json
Authorization: key=AAAAmp4NuuM:APA91bEz5N9tt5NFbVEfxnRujVgTgFf9sG2iCE_lTUlhj5T__STeg3WJvoHiH-xPiqReAcEmh3HBlmYVCRNzgs9nQCoGqEug8JHdk8N_JTbj3vskSdnj1ZJm5fxw1MhoWC8cynDgPulS

{ "notification": {
    "title": "Background Message Title",
    "body": "Background message body",
    "click_action" : "https://joytemple-34f86.firebaseapp.com"
  },

  "to" : "eEz-Q2sG8nQ:APA91bHJQRT0JJ..."

}
