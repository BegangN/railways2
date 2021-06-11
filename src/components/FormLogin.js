import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Alert } from 'react-alert'
import Axios from "axios";



export default function FormLogin(props) {

  const [email, setemail] = useState("");
  const [user, setUser ]= useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const [currentUser, setCurrentUser] = useState(null); 

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("https://botswana-railways.herokuapp.com//login", {
      email: email,
      password: password,
    }).then((response) => {
       if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
        setCurrentUser(true);
        alert("logged in");
      }
    });
  };

  if(currentUser){
   return  <Redirect to="/company-profile" />;
  }

  return (
    <div>
                      <h2 class="mt-5"> Welcome Back</h2>
                       <h5 class="mt-3 mb-3 text-center"> Login</h5>
                      <h5 class="text-danger">{loginStatus}</h5>
                       <div class="text-box-cont">
                          
                            <div class="input-group mb-3">
                               <div class="input-group-prepend">
                                   <span class="input-group-text" id="basic-addon1">
                                       <i class="far fa-envelope"></i>
                                   </span>
                               </div>
                               <input type="text" class="form-control" placeholder="Email Address" name="email"
                                onChange={(event) =>{
                                  setemail(event.target.value);
                               }}
                               />
                           </div>
                            <div class="input-group mb-3">
                               <div class="input-group-prepend">
                                   <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
                               </div>
                               <input type="password" class="form-control" placeholder="Password" name="password"
                               onChange={(event) =>{
                                 setpassword(event.target.value);
                               }}
                               />
                           </div>
                              
                          
                           <div class="input-group center mb-3">
                      
                  
                               <button class="btn btn-primary " onClick={() => { login(); }}>Sign In</button>
                               <button class="btn btn-light ">Forgot password</button>
                           </div>  

                           <div class="input-group mb-3">
                           <div class="mb-5">
                                      
                           <p class="small-info">New to system ? <Link to={'/signup'} activeClassName="current" class="text-primary">Create account</Link></p>
                           </div>    
                       </div>
                       </div>
                    
                      
                   </div>
                  
  

  );
}
