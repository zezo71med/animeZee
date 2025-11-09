import { useState, createContext, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../state/Store";

export const AppContext = createContext<any>(null)
const AppProvider = ({ children }) => {
    const nameTerm= useSelector((state:RootState)=>state.searchTerm.searchTerm)

    const [name, setName] = useState<string>('');
    useEffect(()=>{
        setName(nameTerm)
    },[nameTerm])

    return (
        <AppContext.Provider value={{ name ,setName}} >
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider