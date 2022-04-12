import { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const auth = getAuth(app.myapp)

const GoogleProvider = new GoogleAuthProvider()



const UseFirebase = () => {
    const [user, setUser] = useState([])

    useEffect(() => {


    }, [])

    const signInwithGoogle = () => {

        signInWithPopup(auth, GoogleProvider)
            .then(result => {

                const user = result.user

                setUser(user)
            })

            .catch(error => {

                console.error(error)
            })

        console.log('google sign in');
    }
    // return [user, setUser]

    return { user, setUser, signInwithGoogle }


}

export default UseFirebase;