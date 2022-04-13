import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import UseFirebase from '../../Hooks/UseFirebase';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app.myapp)
const Home = () => {

    const [user] = useAuthState(auth)

    // const { user } = UseFirebase()
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Home
            </h1>

            <p>Current user is {user ? user?.displayName : 'no body'}</p>
        </div>
    );
};

export default Home;