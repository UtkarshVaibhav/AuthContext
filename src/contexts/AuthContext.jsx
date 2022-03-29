import {createContext, useState } from "react";
export const AuthContex=createContext();
export const AuthContexProvider=({children})=>{
    const [isAuth,setAuth]=useState(false);
    const[token,setToken]=useState(null);
    const toggleAuth=(res)=>{
        console.log("here",res);
        setAuth(res);
    }
    const handleToken=(tok)=>{
        setToken(tok);
    }
    return <AuthContex.Provider value={{isAuth,toggleAuth,token,handleToken}}>
        {children}
    </AuthContex.Provider>
}