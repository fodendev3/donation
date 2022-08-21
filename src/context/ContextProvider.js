/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, createContext } from "react";

const Context = createContext()
export const useDataContext = () => useContext(Context);

const ContextProvider = props => {
    const { user, ngo } = props

    return <Context.Provider value={{ user, ngo }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;