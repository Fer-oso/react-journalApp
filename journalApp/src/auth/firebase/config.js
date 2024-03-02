import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDTqE7mUsoJb51smaUzRd5jFYoebBSLvv0",
    authDomain: "react-proyects-student.firebaseapp.com",
    projectId: "react-proyects-student",
    storageBucket: "react-proyects-student.appspot.com",
    messagingSenderId: "657985504196",
    appId: "1:657985504196:web:c38e7a89521229f4d29a91"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp);