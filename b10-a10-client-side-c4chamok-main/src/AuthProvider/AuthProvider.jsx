import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDark, setIsDark] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState("");

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, Password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, Password)
    }
    const register = (email, Password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, Password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])



    const contextInfo = { login, register, logout, user, loading, updateUserProfile, googleSignIn, isDark, setIsDark, selectedGenres, setSelectedGenres }

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;