import {  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginApi = (email, password) => {
    try{
        let response =  signInWithEmailAndPassword(auth, email, password)
        return response
    }catch(err){
        return err
    }
 
  
}


export const RegisterApi = (email, password) =>{
    try{
        let response =  createUserWithEmailAndPassword(auth, email, password)
        return response
    }catch(err){
        return err
    }

}

export const onLogOut = (email, password) =>{
    try{
       signOut(auth)
    }catch(err){
        return err
    }

}