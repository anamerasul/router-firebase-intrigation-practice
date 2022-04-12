

import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import Header from './Components/Header/Header';




const auth = getAuth(app.myapp)

console.log(auth)

function App() {
  return (
    <div className="">
      <Header></Header>
    </div>
  );
}

export default App;
