// import {initializeApp } from "firebase/app"

// const app = initializeApp({
//     apiKey: "AIzaSyDXzoUyjmT0vHW_VzqItMZqiaNJm_egV48",
//     authDomain: "edu-project-ac555.firebaseapp.com",
//     projectId: "edu-project-ac555",
//     storageBucket: "edu-project-ac555.appspot.com",
//     messagingSenderId: "1079542418684",
//     appId: "1:1079542418684:web:0814322418a14b0d371b79"
//   })
// export default app


import {initializeApp } from "firebase/app"

const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    databaseURL:process.env.REACT_APP_DATABASE_URL
  })
  
export default app