
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,  signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null)


const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser] = useState()

 const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
 }

 const logIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
 }



 const logOut = () => {
    return signOut(auth)
 }

   useEffect(()=> {
    const unSunscribe = onAuthStateChanged(auth, currentUser => {
        console.log("user OnAuthchanged",currentUser);
        setUser(currentUser)
    });
    return () => {
        unSunscribe();
    }
   },[])

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;