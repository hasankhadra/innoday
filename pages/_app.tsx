import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { initializeApp, FirebaseApp } from "firebase/app";
import React from "react";

// const firebaseConfig = {
//   apiKey: "AIzaSyAc2Z8DBuSWL_ifUmRFH5ukChjUlWeW3e8",
//   authDomain: "innoday-6b9ff.firebaseapp.com",
//   projectId: "innoday-6b9ff",
//   storageBucket: "innoday-6b9ff.appspot.com",
//   messagingSenderId: "334247834232",
//   appId: "1:334247834232:web:866b43440fb8a2b3b7f38d",
//   measurementId: "G-CJ9E9PK1Z2"
// };

// const app = initializeApp(firebaseConfig);

// const FireBaseAppContext = React.createContext({
//   app: FirebaseApp
// });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
