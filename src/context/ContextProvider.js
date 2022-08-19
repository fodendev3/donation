import React, { useContext, createContext } from "react";
// import { useStorage } from "../hooks";

const Context = createContext()
export const useDataContext = () => useContext(Context);

const ContextProvider = props => {
    const abc = 1
    return <Context.Provider value={{ abc }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;