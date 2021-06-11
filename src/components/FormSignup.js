import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom'
import Axios from 'axios';
import { Alert } from 'react-alert'
import { Link } from 'react-router-dom';

const FormSignup = () => {

  const [currentUser, setCurrentUser] = useState(null); 

  const [companyName, setcompanyName] = useState("");
  const [regNumber, setregNumber] = useState("");
  const [email, setemail] = useState("");
  const [telephone, settelephone] = useState(0);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userType, setuserType] = useState("");
  const [CompanyServices, setCompanyServices] = useState("");
  
  const addCompanyDetails = () => {
  Axios.post("https://botswana-railways.herokuapp.com//create", {
  companyName: companyName,
  regNumber: regNumber,
  email: email,
  telephone: telephone,
  username: username,
  password: password,
  userType: userType,
  CompanyServices: CompanyServices,
  }).then(() =>{
    console.log("success");
  })
  setCurrentUser(true);
  alert("registered succesfuly")
  };


  
if (currentUser) {
    return <Redirect to="/newUser" />;
}
    return (
        <>
       
        <div class="mt-5 container-fluid header h-100">
<div class="small-logo text-center">
                           
                           <img src="./assets/images/logo.png" class="img-responsive" alt="Image"/>
                           
                       </div>
       <div class="mt-4 row no-margin h-100">
           
           <div class="col-sm-12 no-padding login-box h-100">
               <div class="row no-margin w-100">
                  <div class="col-lg-6 col-md-6 box-de">
                    
                       <div class="ditk-inf sup-oi">
                           <h1 class="w-100 mt-5">Botswana <br/>Railways Vendor <br/> Registration</h1>
                           <p>Botswana Railways aspires to provide total logistics solutions that are in line with its customers 
                               ‘changing needs and in accordance with global trends. Our commitment is to continuously engage in effective
                                and efficient ways of improving service delivery to our customers and ensure stakeholder satisfaction.</p>
                           <a href={"https://www.botswanarailways.co.bw/profile"}>
                               <button type="button" class="mt-4 mb-5 btn btn-outline-light">Read More</button>
                           </a>
                       </div>
                   </div>
                   <div class="col-lg-6 col-md-6 log-det">
                <h2 class=""> Welcome</h2>
                       <h5 class="text-center mb-4">Create Account to access the system</h5>
                       <form autoComplete="off">               
                      
                       <div class="text-box-cont">
                       <div className="form-row">

                            <div class="input-group mb-3">
                               <div class="input-group-prepend">
                                   <span class="input-group-text" id="basic-addon1">
                                        <i className="fas fa-user"></i>
                                   </span>
                               </div>
                        

<input className="form-control" type="text" name="companyName" placeholder="Company Name"
                    onChange={(event) =>{
                      setcompanyName(event.target.value);
                    }}
                required/>
                           </div>

                           <div class="input-group  mb-3">
                               <div class="input-group-prepend">
                                   <span class="input-group-text" id="basic-addon1">
                                        <i class="fas fa-address-book"></i>
                                   </span>
                               </div>
                        

<input className="form-control" type="number"  name="regNumber" placeholder="Company Reg Number"
                   onChange={(event) =>{
                     setregNumber(event.target.value);
                   }}
                   required />
                           </div>

                           </div>

                           <div className="form-row">

<div class="input-group  mb-3">
   <div class="input-group-prepend">
       <span class="input-group-text" id="basic-addon1">
            <i className="fas fa-envelope"></i>
       </span>
   </div>
   <input class="form-control" type="email"  name="email" placeholder="Company Email"
   onChange={(event) =>{
     setemail(event.target.value);
   }}
     required/>
</div>

<div class="input-group  mb-3">
   <div class="input-group-prepend">
       <span class="input-group-text" id="basic-addon1">
            <i className="fas fa-mobile"></i>
       </span>
   </div>
   <input class="form-control"  type="number" name="telephone" placeholder="Company Telephone"
   onChange={(event) =>{
     settelephone(event.target.value);
   }}
   required/>
</div>

<div class="input-group mb-3">
                               <div class="input-group-prepend">
                                   <span class="input-group-text" id="basic-addon1"> <i className="fas fa-user"></i></span>
                               </div>
                               <input type="text" name="username" class="form-control" placeholder="Username"
                               onChange={(event) =>{
                                 setusername(event.target.value);
                               }}
                               required/>
                           </div>
                            <div class="input-group mb-3">
                               <div class="input-group-prepend">
                                   <span class="input-group-text" id="basic-addon1"> <i className="fas fa-lock"></i></span>
                               </div>
                               <input className="form-control" placeholder="Password" type="password"  name="password"
                               onChange={(event) =>{
                                 setpassword(event.target.value);
                               }}
                               required/>
                           </div>

                           <div class="input-group mb-3">
      
      <select class="form-control" name="userType"
      onChange={(event) =>{
       setuserType(event.target.value);
     }}
       >
   
<option>Select ...</option>
<option>Vendor</option>
<option>Supplier</option>
</select>
  </div>

                               </div> 
                         
                           <div className="form-group">
                           <button className="btn btn-primary btn-block"  onClick ={addCompanyDetails}>Create Account</button>
               
            </div>

               </div>           
                       
        </form>
    
                               
            
            
<div class="input-group text-center ml-5 pl-5 mb-3">
            <div class="ml-5 pl-2">
                                      
                                      <p class="text-center ml-5">Already have an account? <Link to={'/'} class="text-primary">Login</Link></p>
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

export default FormSignup;