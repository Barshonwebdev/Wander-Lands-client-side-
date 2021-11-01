
import { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useEffect } from 'react';
 
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({ });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]= useState('');
    const [email, setEmail]= useState('');
    const [name,setName] = useState('');
  const [pass, setPass]= useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        
        .catch(error => {
            setError(error.message)
        })
        
    }

    //observe state change

    useEffect(()=>{
      const unsub= onAuthStateChanged(auth,user =>{
        if (user){
          setUser(user);
        }
        else{
          setUser({})
        }
        setIsLoading(false);
      })
    },[auth])

    const handleRegistration = e =>{
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential)=>{
          const user= userCredential.user;
          setUserName();
          window.location.reload();
          console.log(user);
        })
        
        .catch((error) => {
        
        });
        
      }
    const handleSignIn = e =>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential)=>{
          const user= userCredential.user;
          setUserName();
          
          console.log(user);
        })
        

        .catch((error) => {
        
        });
        
      }
    
      const setUserName =() =>{
        const auth= getAuth();
        updateProfile(auth.currentUser, {displayName: name})
        .then(result=>{
          
        })
      }
    
      const handleNameChange = e => {
          setName(e.target.value);
          
      }
    
      const handleEmail = e =>{
          setEmail(e.target.value)
          console.log(e.target.value);
    
      }
    
      const handlePass = e => {
        setPass(e.target.value)
        console.log(e.target.value);
      }  

    const logout = ()=>{
            signOut(auth)
            .then(()=>{
                setUser({});
                window.location.reload();
            })
    }

    

    return {
        user,isLoading, setIsLoading,error, signInUsingGoogle, logout, handleRegistration, setUserName, handleNameChange, handleEmail, handlePass, handleSignIn, 
    }
}

export default useFirebase;