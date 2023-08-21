import React, { createContext, useState } from 'react'

export const FeaturesContext = createContext(null);

export const FeaturesContextProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    return (
        <FeaturesContext.Provider value={{total, setTotal}}>{children}</FeaturesContext.Provider>
    )
}

export default FeaturesContext; 

