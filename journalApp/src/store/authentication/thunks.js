import {signInWhitGoogle, registerUserWithEmailPassword,  startLoginWithEmailAndPassword, logoutFirebase } from "../../auth/firebase/providers/providers"
import { checkingCredentials, login, logout } from "./slices/authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials({
            status: 'checking credentials'
        }))
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials({
            status: 'cheking google credentials'
        }))

        const signedUserWithGoogle = await signInWhitGoogle();

        if (!signedUserWithGoogle.loginStatus) return dispatch(logout(signedUserWithGoogle.errorMessage))

        dispatch(login(signedUserWithGoogle))
    }
}

export const startCreatingUserWithEmailPassword = ({ name, password, email }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const { loginStatus, uid, photoURL, errorMessage }  = await registerUserWithEmailPassword({ email, password, name });

        if (!loginStatus) return dispatch(logout(errorMessage));

        dispatch(login(uid, name, email, photoURL));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials);

        const result = await startLoginWithEmailAndPassword({ email, password });

        if (!result.loginStatus) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}

export const startLogout = () =>{
    return async(dispatch) =>{
        await logoutFirebase();

        dispatch(logout())
    }

}