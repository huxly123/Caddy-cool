import { createContext, useState } from "react";

 

export const Appcontext = createContext()
 
export const AppcontextProvider = ({ children }) => {
    
const [change,setChange]=useState(true)

    return <Appcontext.Provider value={{change,setChange}}>
        {children}
    </Appcontext.Provider>
}