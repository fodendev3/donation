import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useState } from "react";
import { ngoAuth, userAuth } from "../firebase";
// import { useStorage } from "../hooks";

const Context = createContext()
export const useDataContext = () => useContext(Context);

const ContextProvider = props => {
    const [user, setUser] = useState()
    const [ngo, setNgo] = useState()

    onAuthStateChanged(userAuth, ({ uid }) => {
        if (uid) return console.log('User not authenticated')
        setUser(uid)
        console.log('User authenticated')
    })

    onAuthStateChanged(ngoAuth, ({ uid }) => {
        if (uid) return console.log('Ngo not authenticated')
        setNgo(uid)
        console.log('Ngo authenticated')
    })

    return <Context.Provider value={{ user, ngo }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;