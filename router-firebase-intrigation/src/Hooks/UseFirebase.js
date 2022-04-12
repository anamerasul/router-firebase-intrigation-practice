import { useEffect, useState } from "react";


const UseFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {


    }, [])

    const signInwithGoogle = () => {

        console.log('google sign in');
    }
    return [user, setUser]


}

export default UseFirebase;