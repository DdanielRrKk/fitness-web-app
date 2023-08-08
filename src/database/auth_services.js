import { auth, googleAuthProvider } from '../../firebase.config';
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';



export function isUserAuthenticated() {
    try {
        console.log(auth?.currentUser?.email);
        return (auth?.currentUser === undefined);
    } catch (error) {
        console.log('Error in isUserAuthenticated');
        console.error(error);
    }
}

export async function AuthenticateUserWithEmailAndPassword(isLogIn, email, password) {
    try {
        if (isLogIn) {
            await signInWithEmailAndPassword(auth, email, password);
        }
        else {
            await createUserWithEmailAndPassword(auth, email, password);
        }
    }
    catch (error) {
        console.log('Error in AuthenticateUserWithEmailAndPassword');
        console.error(error);
    }
}

export async function AuthenticateUserWithGoogle() {
    try {
        await signInWithPopup(auth, googleAuthProvider);
    }
    catch (error) {
        console.log('Error in AuthenticateUserWithGoogle');
        console.error(error);
    }
}

export async function LogoutUser() {
    try {
        await signOut(auth);
    }
    catch (error) {
        console.log('Error in LogoutUser');
        console.error(error);
    }
}
