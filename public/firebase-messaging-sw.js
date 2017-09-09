importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '664076663523'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'ICGC - Joy Temple';
    const options = {
        body: payload.data.status,
        icon: 'assets/img/logo-3x.png'
    };
    return self.registration.showNotification(title, options);
});


