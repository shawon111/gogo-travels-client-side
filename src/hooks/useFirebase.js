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

    //google login handler
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user); 
             })
    };

    //handle logout
    const handleLogout = () => {
        signOut(auth).then( () => {
            setUser({})
        } ).catch((error)=> {
            alert('logout failed');
        })
    }

    //getting currently logged in user
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
        })
    },[]);

    return {
        user,
        handleGoogleLogin,
        handleLogout
    }
}

export default useFirebase;