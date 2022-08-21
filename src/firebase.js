import { initializeApp } from 'firebase/app'
import { getFirestore, getDoc, doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { generatePassword, randomNumber } from './modules/random';

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
export const auth = getAuth()

export async function signupUser(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        localStorage.setItem('auth-type', 'user')
        return { success: true }
    } catch (error) { return { success: false, error: error.message || 'Some error occured...' } }
}

export async function loginUser(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem('auth-type', 'user')
        return { success: true }
    } catch (error) { return { success: false, error: error.message || 'Some error occured...' } }
}

export async function getUserData(uid) {
    try {
        const info = await getDoc(doc(db, `/users/${uid}`))
        return { success: info.exists(), data: info.data() }
    } catch { return { success: false } }
}

export async function initiateDonation(uid, items) {
    try {
        const ref = doc(db, `/users/${uid}`)
        const info = await getDoc(ref)
        const donation = { id: randomNumber(6), items, status: 'pending' }
        let donations;
        if (info.exists()) {
            donations = info.data().donations || []
            donations.push(donation)
            await updateDoc(ref, { donations })
        }
        return { success: true, donations }
    } catch { return { success: false } }
}

export async function acceptDonation(uid, id, ngoId) {
    try {
        const ref = doc(db, `/users/${uid}`)
        const info = await getDoc(ref)
        if (info.exists()) {
            const donations = info.data().donations || []
            for (let i = 0; i < donations.length; i++) {
                const donation = donations[i]
                if (donation.status === 'pending' && donation.id === id) {
                    const password = generatePassword()
                    donation.status = 'accepted'
                    donation.ngo = ngoId
                    donation.password = password
                    donations[i] = donation
                    await updateDoc(ref, { donations })
                    return { success: true, password }
                }
            }
        }
        return { success: false }
    } catch { return { success: false } }
}

export async function completeDonation(uid, id, password) {
    try {
        const ref = doc(db, `/users/${uid}`)
        const info = await getDoc(ref)
        if (info.exists()) {
            const donations = info.data().donations || []
            for (let i = 0; i < donations.length; i++) {
                const donation = donations[i]
                if (donation.status === 'accepted' && donation.id === id && donation.password === password) {
                    donation.status = 'donated'
                    donations[i] = donation
                    await updateDoc(ref, { donations })
                    return { success: true }
                }
            }
        }
        return { success: false }
    } catch { return { success: false } }
}

export async function signupNgo(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        localStorage.setItem('auth-type', 'ngo')
        return { success: true }
    } catch (error) { return { success: false, error: error.message || 'Some error occured...' } }
}

export async function loginNgo(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem('auth-type', 'ngo')
        return { success: true }
    } catch (error) { return { success: false, error: error.message || 'Some error occured...' } }
}

export async function getNgos(pincode = 'all') {
    try {
        const { docs } = await getDocs(collection(db, '/ngos'))
        let ngos = []
        docs.forEach(doc => {
            const data = doc.data()
            if (pincode === 'all' || data.pincode === pincode) ngos.push(data)
        })
        return { success: Boolean(ngos.length), ngos }
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