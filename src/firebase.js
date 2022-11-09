import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa3z26dmXtKH1AaZ4h17SWPKcfIwzZZos",
  authDomain: "aries-en.firebaseapp.com",
  projectId: "aries-en",
  storageBucket: "aries-en.appspot.com",
  messagingSenderId: "159205612826",
  appId: "1:159205612826:web:92f5517b3219c121daa0a3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
}