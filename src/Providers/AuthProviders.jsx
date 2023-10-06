
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null)


const auth = getAuth(app);

const AuthProviders = ({ children }) => {
   const [user, setUser] = useState()
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const logIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }



   const logOut = () => {
      setLoading(true)
      return signOut(auth)
   }

   useEffect(() => {
      const unSunscribe = onAuthStateChanged(auth, currentUser => {
         console.log("user OnAuthchanged", currentUser);
         setUser(currentUser)
         setLoading(false)
      });
      return () => {
         unSunscribe();
      }
   }, [])

   const authInfo = {
      user,
      loading,
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