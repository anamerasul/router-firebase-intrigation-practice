

import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Logout from './Components/Logout/Logout';




const auth = getAuth(app.myapp)

console.log(auth)

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={
          <RequireAuth>


            <Products></Products>

          </RequireAuth>

        }></Route>

        <Route path='/orders' element={


          <RequireAuth>
            <Orders></Orders>

          </RequireAuth>

        }></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
