import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLegendToggle } from 'react-icons/md';
// import CustomLink from '../../CustomLInk/CustomLink';
import CustomLink from '../CustomLInk/CustomLink';
import UseFirebase from '../../Hooks/UseFirebase';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app.myapp)




const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const [user] = useAuthState(auth)
    // const { user, handleSignOut } = UseFirebase()

    console.log(user)
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 top-0 bg-gray-800 shadow-lg  text-white mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                        <Link to='/'
                            className=" text-xl md:text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-fuchsia-300 md:text-white "
                        >
                            router-firebase
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <MdLegendToggle ></MdLegendToggle>
                        </button>
                    </div>
                    <div
                        className={
                            "md:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col md:flex-row list-none  md:ml-auto">
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/'>HOME</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/products'>products</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/orders'>Orders</CustomLink>
                            </li>

                            {

                                !user?.uid ? <li className="nav-item">
                                    <CustomLink className="px-3 py-2 flex items-center uppercase" to='/signup'>Sign Up</CustomLink>
                                </li> : ''
                            }


                            <span>{user?.displayName && user?.displayName}</span>

                            {

                                user?.uid ?

                                    <li className="nav-item">
                                        <CustomLink onClick={() => signOut(auth)} className="px-3 py-2 flex items-center uppercase" to='/logout'>Logout</CustomLink>
                                    </li> :
                                    <li className="nav-item">
                                        <CustomLink className="px-3 py-2 flex items-center uppercase" to='/login'>Login</CustomLink>
                                    </li>

                            }














                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;