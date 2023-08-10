import { 
    collection, 
    doc, 
    setDoc,
    getDoc, 
    updateDoc,
    deleteDoc,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../../firebase.config';
import { auth } from '../../firebase.config';



// CREATE USER DATA OBJECT
export async function CreateUserDataObject(name, age, gender, weight, height) {
    try {
        console.log('auth.currentUser: ', auth.currentUser);

        const userCollectionRef = collection(db, 'user');
        const userDocRef = doc(userCollectionRef, auth.currentUser.uid);
        console.log('userDocRef: ', userDocRef);

        const userId = auth.currentUser ? auth.currentUser.uid : 'unknown';
        const userEmail = auth.currentUser ? auth.currentUser.email : 'unknown';

        const newUser = {
            name, age, gender, weight, height,
            userId: userId,
            email: userEmail,
            createdAt: serverTimestamp(),
            lastUpdated: serverTimestamp()
        }
        console.log('newUser: ', newUser);

        const docRef = await setDoc(userDocRef, newUser);
        console.log('docRef: ', docRef);
        return newUser;
    }
    catch (error) {
        console.log('Error in CreateUserDataObject');
        console.error(error);
    }
}

// READ USER DATA OBJECT
export async function ReadUserDataObject() {
    try {
        console.log('auth.currentUser: ', auth.currentUser);
        if(auth?.currentUser === null || auth?.currentUser === undefined) {    
            console.log('auth.currentUser was empty!');
            return null;
        }

        const userCollectionRef = collection(db, 'user');
        const userDocRef = doc(userCollectionRef, auth.currentUser.uid);

        const userDocSnapshot = await getDoc(userDocRef);
        if(userDocSnapshot.exists()) {
            console.log('userDocSnapshot.data(): ', userDocSnapshot.data());
            return userDocSnapshot.data();
        }
        else{
            console.log('No such document!');
            return null;
        }
    }
    catch (error) {
        console.log('Error in ReadUserDataObject');
        console.error(error);
    }
}

// UPDATE USER DATA OBJECT
export async function UpdateUserDataObject(newData) {
    try {
        console.log('auth.currentUser: ', auth.currentUser);
        if(auth?.currentUser === null || auth?.currentUser === undefined) {
            console.log('auth.currentUser was empty!');
            return;
        }

        const userCollectionRef = collection(db, 'user');
        const userDocRef = doc(userCollectionRef, auth.currentUser.uid);

        const newUser = { 
            ...newData, 
            lastUpdated: serverTimestamp()
        }

        await updateDoc(userDocRef, newUser);
        console.log('updated doc!');
    }
    catch (error) {
        console.log('Error in UpdateUserDataObject');
        console.error(error);
    }
}

// DELETE USER DATA OBJECT
export async function DeleteUserDataObject() {
    try {
        console.log('auth.currentUser: ', auth.currentUser);
        if(auth?.currentUser === null || auth?.currentUser === undefined) {
            console.log('auth.currentUser was empty!');
            return;
        }

        const userCollectionRef = collection(db, 'user');
        const userDocRef = doc(userCollectionRef, auth.currentUser.uid);
        
        await deleteDoc(userDocRef);
        console.log('deleted doc!');
    }
    catch (error) {
        console.log('Error in DeleteUserDataObject');
        console.error(error);
    }
}
