import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ngoAuth, userAuth } from "../firebase";
// import { useStorage } from "../hooks";

const Context = createContext()
export const useDataContext = () => useContext(Context);

const ContextProvider = props => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [ngo, setNgo] = useState()
    const userPages = ['/user']
    const ngoPages = ['/ngo']

    onAuthStateChanged(userAuth, user => {
        console.log(user)
        // if (uid) return console.log('User not authenticated')
        // setUser(uid)
        // console.log('User authenticated')
    })

    onAuthStateChanged(ngoAuth, user => {
        console.log(user)
        // if (uid) return console.log('Ngo not authenticated')
        // setNgo(uid)
        // console.log('Ngo authenticated')
    })

    return <Context.Provider value={{ user, ngo }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;