/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import { useStorage } from "../hooks";

const Context = createContext()
export const useDataContext = () => useContext(Context);

const ContextProvider = props => {
    const navigate = useNavigate()
    const { user, ngo } = useAuth()
    const notLogged = ['/', '/user/signup', '/user/login', '/ngo/signup', '/ngo/login', '/ngo/all', 'ngo/:uid']
    const userLogged = ['/user', '/ngo/:uid', '/user/donate', '/user/donations', '/ngo/all']
    const ngoLogged = ['/ngo', '/ngo/profile', '/ngo/:uid', '/ngo/all', '/ngo/dashboard', '/ngo/dashmore']

    return <Context.Provider value={{ user, ngo, navigate }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;