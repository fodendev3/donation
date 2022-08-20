import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const appId = process.env.REACT_APP_FIREBASE_APP_ID
const measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

// Initialising app
initializeApp({ apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId });

// Initialising services
const db = getFirestore();
export const userAuth = getAuth()
export const ngoAuth = getAuth()

export async function signupUser(email, password) {
    try {
        await createUserWithEmailAndPassword(userAuth, email, password)
        return { success: true }
    } catch (error) { return { success: false, error: error.message || 'Some error occured...' } }
}

export async function loginUser(email, password) {
    try {
        await signInWithEmailAndPassword(userAuth, email, password)
        return { success: true }
    } catch (error) { return { success: false, error: error.message || 'Some error occured...' } }
}

export async function signupNgo(email, password) {
    try {
        await createUserWithEmailAndPassword(ngoAuth, email, password)
        return { success: true }
    } catch (error) { return { success: false, error: error.message || 'Some error occured...' } }
}

export async function loginNgo(email, password) {
    try {
        await signInWithEmailAndPassword(ngoAuth, email, password)
        return { success: true }
    } catch (error) { return { success: false, error: error.message || 'Some error occured...' } }
}

export async function getNgoData() {

}