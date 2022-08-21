import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
// import { useStorage } from "../hooks";

const Context = createContext()
export const useDataContext = () => useContext(Context);

const ContextProvider = props => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [ngo, setNgo] = useState()
    // const notLogged = ['/', '/user/signup', '/user/login', '/ngo/signup', '/ngo/login']
    // const userLogged = ['/user', '/ngo/:uid', '/user/donate', '/user/donations']
    // const ngoLogged = ['/ngo', '/ngo/profile']

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (!user) return console.log('Not authenticated')
            const { uid } = user
            const authType = localStorage.getItem('auth-type')
            if (authType === 'user') {
                setUser(uid)
                console.log('User authenticated')
            } else if (authType === 'ngo') {
                setNgo(uid)
                console.log('Ngo authenticated')
            }
        })

        // getNgoData('Vl8tBuZ9EgEux13A3PFa')
        // getNgos().then(({ success, ngos }) => console.log(ngos))
    }, [])

    return <Context.Provider value={{ user, ngo, navigate }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;