import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../config";

const googleProvider = new GoogleAuthProvider();

export const signInWhitGoogle = async () => {

    try {

        const result = await signInWithPopup(firebaseAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user;

        return {
            loginStatus: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;

        const errorMessage = error.message

        return {
            loginStatus: false,
            errorCode, errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({name, email, password}) =>{

    try {

       const result = await createUserWithEmailAndPassword(firebaseAuth,email,password);

       const {uid,photoURL} = result.user;

       await updateProfile(firebaseAuth.currentUser,{displayName:name});

       return{
        loginStatus: true,
        uid,
        name,
        email,
        photoURL
       }
        
    } catch (error) {
        return{
            loginStatus:false,
            errorMessage: error.message
        }
    }
}

export const startLoginWithEmailAndPassword = async ({email,password}) =>{

    try {

        const result = await signInWithEmailAndPassword(firebaseAuth,email,password);

        console.log(result.user)

        const {uid,photoURL,displayName} =  result.user;

        return{
            loginStatus: true,
            uid,
            name:displayName,
            photoURL
        }
        
    } catch (error) {
        
        return{
            loginStatus:false,
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async()=>{

    return await firebaseAuth.signOut();
}