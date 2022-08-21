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

    return <Context.Provider value={{ user, ngo, navigate }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;