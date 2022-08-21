/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const useAuth = () => {
    const [user, setUser] = useState()
    const [ngo, setNgo] = useState()

    useEffect(() => {
        const unlisten = auth.onAuthStateChanged(user => {
            if (!user) {
                console.log('Not authenticated')
                setUser()
                setNgo()
            }
            else {
                const { uid } = user
                const authType = localStorage.getItem('auth-type')
                if (authType === 'user') {
                    setUser(uid)
                    setNgo()
                    console.log('User authenticated')
                } else if (authType === 'ngo') {
                    setNgo(uid)
                    setUser()
                    console.log('Ngo authenticated')
                }
            }
        })
        return () => { unlisten(); }
    }, []);

    return { user, ngo }
}

export default useAuth;