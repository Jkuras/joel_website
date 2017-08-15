(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuKb9So5wgWyLvmCfEgwZK5MHZpCXJDvI",
    authDomain: "joelwebsite-e8e31.firebaseapp.com",
    databaseURL: "https://joelwebsite-e8e31.firebaseio.com",
    projectId: "joelwebsite-e8e31",
    storageBucket: "joelwebsite-e8e31.appspot.com",
    messagingSenderId: "717914023604"
  };
  firebase.initializeApp(config);

  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('data', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
  }

)()
