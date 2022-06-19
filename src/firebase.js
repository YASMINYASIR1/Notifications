// import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // import firebase from 'firebase/compat/app';


// // import 'firebase/compat/firestore';
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAXzM5XT9D1VFmySBiRBKdTj8JheonML5s",
//     authDomain: "notificationfr-ccb04.firebaseapp.com",
//     projectId: "notificationfr-ccb04",
//     storageBucket: "notificationfr-ccb04.appspot.com",
//     messagingSenderId: "684735498179",
//     appId: "1:684735498179:web:9305a131b684ec2483df76"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);



// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }
  
// export default firebase;

/////////////////////////////////////////////////////////////////


import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestorage';


<head>
  <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  <link rel='stylesheet' type='text/css' href='/resources/tutorial/css/example.css'/>
</head>

const firebaseConfig = {
    apiKey: "AIzaSyAXzM5XT9D1VFmySBiRBKdTj8JheonML5s",
    authDomain: "notificationfr-ccb04.firebaseapp.com",
    projectId: "notificationfr-ccb04",
    storageBucket: "notificationfr-ccb04.appspot.com",
    messagingSenderId: "684735498179",
    appId: "1:684735498179:web:9305a131b684ec2483df76"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage};


