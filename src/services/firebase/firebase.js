import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDB9Q5HbemxXL4hlTvf8NHtA3UgaULF-Cs",
  
    authDomain: "app-react-js.firebaseapp.com",
  
    projectId: "app-react-js",
  
    storageBucket: "app-react-js.appspot.com",
  
    messagingSenderId: "352891839178",
  
    appId: "1:352891839178:web:bcef88f7f37ce8313aca33"
  
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);