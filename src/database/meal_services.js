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



// CREATE/ADD MEAL DATA LOG
export async function CreateMealDataLog(name, grams, carbs, protein, fat) {
    try {
        console.log('auth.currentUser: ', auth.currentUser);

        const mealCollectionRef = collection(db, 'meals');

        const userId = auth.currentUser ? auth.currentUser.uid : 'unknown';

        const newMeal = {
            name, grams, carbs, protein, fat,
            userId: userId,
            createdAt: serverTimestamp(),
            lastUpdated: serverTimestamp()
        }
        console.log('newMeal: ', newMeal);

        const docRef = await setDoc(mealCollectionRef, newMeal);
        console.log('docRef: ', docRef);
        return newMeal;
    }
    catch (error) {
        console.log('Error in CreateMealDataLog');
        console.error(error);
    }
}
