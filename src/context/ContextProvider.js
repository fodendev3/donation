import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNgoData, ngoAuth, userAuth } from "../firebase";
// import { useStorage } from "../hooks";

const Context = createContext()
export const useDataContext = () => useContext(Context);

const ContextProvider = props => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [ngo, setNgo] = useState()
    const userPages = ['/user']
    const ngoPages = ['/ngo']

    useEffect(() => {
        onAuthStateChanged(userAuth, user => {
            if (!user) return console.log('User not authenticated')
            const { uid } = user
            setUser(uid)
            console.log('User authenticated')
        })

        onAuthStateChanged(ngoAuth, ngo => {
            if (!ngo) return console.log('Ngo not authenticated')
            const { uid } = ngo
            setNgo(uid)
            console.log('Ngo authenticated')
        })
        getNgoData('Vl8tBuZ9EgEux13A3PFa')
    }, [])

    return <Context.Provider value={{ user, ngo }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;