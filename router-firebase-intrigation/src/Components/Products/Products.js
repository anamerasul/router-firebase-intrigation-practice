import React from 'react';
import UseFirebase from '../../Hooks/UseFirebase';

const Products = () => {

    const { user } = UseFirebase()
    return (
        <div>
            <h2> knock who</h2>

            <p>user ;{user ? user?.displayName : 'none'}</p>
        </div>
    );
};

export default Products;