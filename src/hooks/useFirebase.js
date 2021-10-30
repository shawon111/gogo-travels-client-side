import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../firebase/firebase.init";
initializeFirebase();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //declaring user state
    const [user, setUser] = useState({});

    // declaring loading state
    const [isLoading, setIsLoading] = useState(true);

    //google login handler
    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user); 
             }).catch(error => {
                 console.log(error)
             }).finally(()=> setIsLoading(false))
    };

    //handle logout
    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth).then( () => {
            setUser({})
        } ).catch((error)=> {
            alert('logout failed');
        }).finally(()=> setIsLoading(false))
    }

    //getting currently logged in user
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }else{
                setUser({});
            }
            setIsLoading(false);
        })
    },[]);

    return {
        user,
        handleGoogleLogin,
        handleLogout,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;