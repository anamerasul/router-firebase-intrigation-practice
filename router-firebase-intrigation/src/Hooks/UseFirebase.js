import { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


const auth = getAuth(app.myapp)

const GoogleProvider = new GoogleAuthProvider()



const UseFirebase = () => {
    const [user, setUser] = useState([])



    const signInwithGoogle = () => {

        signInWithPopup(auth, GoogleProvider)
            .then(result => {

                const user = result.user

                setUser(user)
            })

            .catch(error => {

                console.error(error)
            })
    }


    const handleSignOut = () => {

        signOut(auth)
            .then(() => {


            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })


    }, [])
    // return [user, setUser]

    return { user, signInwithGoogle, handleSignOut }


}

export default UseFirebase;