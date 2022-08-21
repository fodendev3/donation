import { initializeApp } from 'firebase/app'
import { getFirestore, getDoc, doc, updateDoc, getDocs, collection } from "firebase/firestore";
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

export async function initiateDonation(uid, items) {

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

export async function getNgos() {
    try {
        const ngos = await getDocs(collection(db, '/ngos'))
        console.log(ngos)
        return { success: true }
    } catch { return { success: false } }
}

export async function getNgoData(uid) {
    try {
        const info = await getDoc(doc(db, `/ngos/${uid}`))
        return { success: info.exists(), data: info.data() }
    } catch { return { success: false } }
}

export async function setEvent(uid, title, description, image, url) {
    try {
        const ref = doc(db, `/ngos/${uid}`)
        const info = await getDoc(ref)
        const event = { title, description, image, url }
        let events;
        if (info.exists()) {
            events = info.data().events || []
            events.push(event)
            await updateDoc(ref, { events })
        }
        return { success: true, events }
    } catch { return { success: false } }
}