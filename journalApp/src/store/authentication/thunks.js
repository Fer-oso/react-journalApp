import { signInWhitGoogle } from "../../firebase/providers/providers"
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