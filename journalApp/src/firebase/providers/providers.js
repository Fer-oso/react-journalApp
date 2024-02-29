import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
