import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import UseFirebase from '../../Hooks/UseFirebase';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app.myapp)

const Products = () => {

    const [user] = useAuthState(auth)
    return (
        <div>
            <h2> knock who</h2>

            <p>user ;{user ? user?.displayName : 'none'}</p>
        </div>
    );
};

export default Products;