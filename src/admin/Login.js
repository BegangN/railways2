import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import Axios from "axios";

export default function Login() {
 
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const [currentUser, setCurrentUser] = useState(null); 

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("https://botswana-railways.herokuapp.com//admin", {
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
    return <Redirect to="/manage-companies" />;
  }




  return (
    <>
    <div class="container">
<div class="row justify-content-center">

  <div class="col-xl-6 col-lg-6 col-md-6">

    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-header center pl-5 bg-info">
      <img src="./assets/images/logo.png" class="img-responsive" alt="Image"/>
      </div>
      <div class="card-body p-0">

        <div class="row">
          <div class="col-lg-12">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h2 text-gray-900 mb-4">Hello Admin</h1>
                <h1 class="h4 text-gray-900 mb-4">Login below!</h1>
                <h1>{loginStatus}</h1>
              </div>


                    <div class="form-group">
                    <input type="text" name="email" class="form-control form-control-user" placeholder="Enter Email Address..."
                    onChange={(event) =>{
setemail(event.target.value);
                    }}
                    />
                    </div>
                    <div class="form-group">
                    <input type="password" name="password" class="form-control form-control-user" placeholder="Password"
                    onChange={(event)=>{
                      setpassword(event.target.value);
                    }}
                    />
                    </div>
                    <button  class="btn btn-info btn-user btn-block" onClick={login}>Sign In</button>
                 
                   
                    <hr/>
                


            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

</div>



    </>
  );

                  }