import "./App.css";
import React, { useState } from "react";
import RegisterLogin from "./components/RegisterLogin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import Display from "./components/Display";
import Login from "./components/Login";
import View from "./components/View";
import { useSelector } from "react-redux";

// import Main from './components/Main';
import PrivateRoute from "./PrivateRoute";

function App() {
  const data = useSelector((state) => state.loginData.data);
  const token=JSON.parse(localStorage.getItem('token'))
  // const history=useNavigate()
  console.log(token)
  {
     console.log('main page',data);
  }
// function routing(){
//   if(token === null){
//     console.log('null tokenb')
// history('/login')
//   }else if(token){
//     console.log('vvalid ')
//     history('/users')
//   }
// }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<RegisterLogin />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="users" element={()=> data===undefined  ? <Navigate to="/login"/> : <Display/>}/> */}
          {/* <Route exact path="users/*" element={<Display />} /> */}
          <Route exact path="/users" element={<Display />} />
         
          <Route exact path="users/view" element={<View />} />
          

        </Routes>
      </div>
    </Router>
  );
}
export default App;
