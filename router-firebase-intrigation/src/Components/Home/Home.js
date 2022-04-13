import React from 'react';
import UseFirebase from '../../Hooks/UseFirebase';

const Home = () => {

    const { user } = UseFirebase()
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