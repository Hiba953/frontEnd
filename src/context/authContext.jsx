import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext =createContext({
    user : null,
    session : null,
    setAuth :(user , session ) =>{}
})

function saveToStorage(user, session ){
    if(!user || !session ){
        localStorage.removeItem("user");
        localStorage.removeItem("session");
    }else{
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("session", JSON.stringify(session))
    }
}
function readFromStorage(){
    const user = localStorage.getItem("user")
    const session = localStorage.getItem("session")
    if(!user || !session) return {user : null, session : null }
    return {user: JSON.parse(user), session : JSON.parse(session)}
}

export const AuthProvider = ({children }) =>{
    const [user, setUser] = useState(null)
    const [ session , setSession] = useState(null)

    function setAuth(user, session ){
        setUser(user),
        setSession(session)
        saveToStorage( user,session)
    }
    useEffect(()=>{
         const authData = readFromStorage()
         if(authData.session){
            
         }
         setUser(authData.user)
         setSession(authData.session)
    },[])
    return (
        <AuthContext.Provider 
        value={{
            user,
            session,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )


} 

