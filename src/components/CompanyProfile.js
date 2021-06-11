import React, { useEffect, useState } from "react";
import Axios from "axios";

import Navigation from "../Navigation";
import Select from 'react-select'
import FormLogin from "./FormLogin";
const CompanyProfile = (props) => {

  const [user, setUser ]= useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const [currentUser, setCurrentUser] = useState(null); 

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("https://botswana-railways.herokuapp.com//comfirm", {
      email: email,
    }).then((response) => {
       if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setEmployeeList(response.data);
        setLoginStatus(response.data[0].email);
        setCurrentUser(true);
      }
    });
  };

 
 const options = [
    { value: 'Manufacture', label: 'Manufacture' },
    { value: 'Repair and Maintenance', label: 'Repair and Maintenance' },
    { value: 'Wholesale', label: 'Wholesale' },
    { value: 'Distributor', label: 'Distributor' },
    { value: 'Agent', label: 'Agent' },
    { value: 'Retailer', label: 'Retailer' },
    { value: 'Professional Services', label: 'Professional Services' },
    { value: 'Consultant', label: 'Consultant' },
    { value: 'Contractor', label: 'Contractor' },
    { value: 'Dealership', label: 'Dealership' },
  ]
         
  const [employeeList, setEmployeeList] = useState([]);
  const [companyName, setcompanyName] = useState("");
  const [regNumber, setregNumber] = useState("");
  const [email, setemail] = useState("");
  const [telephone, settelephone] = useState(0);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userType, setuserType] = useState("");
  const [CompanyServices, setCompanyServices] = useState("");
  
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setEmployeeList(response.data);
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

   
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
  
  
                  
  return (
    <>
 {loginStatus == "visitor" && <FormLogin/>}
<h1>{props.name}</h1>
< Navigation />
      <section class="user_profile inner_pages">
  <div class="container">
    
    <div class="mt-5 row">
      <div class="col-md-3 col-sm-3">
        <div class="profile_nav">
          <ul>
            <li><a href={'/company-profile'} >Profile Settings</a></li>
              <li><a href={'/company-notification'}>Notifications <span class="badge badge-info">4</span></a></li>
              <li><a href={'/company-documents'}>Documents</a></li>
              
            
          </ul>
        </div>
      </div>    
      <div class="col-md-9 col-sm-9">
                       <h5 class="mt-3 mb-3 text-center"> Comfirm your company profile by entering the company email</h5>
  
                  
                          
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
                        
                          
                           <div class="input-group center mb-3">
                      
                  
                               <button class="btn btn-block btn-primary" onClick={() => { login(); }}>Confirm</button>
                              
                           </div>  
                           {employeeList.map ((val , key) => {
         return (
            

         
      <form autoComplete="off">               
                      
                      <div class="text-box-cont">
                      <div className="form-row">

                           <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1">
                                       <i className="fas fa-user"></i>
                                  </span>
                              </div>
                       

<input className="form-control" name="companyName" value={val.companyName}
                   onChange={(event) =>{
                     setcompanyName(event.target.value);
                   }}
               />
                          </div>

                          <div class="input-group  mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1">
                                       <i class="fas fa-address-book"></i>
                                  </span>
                              </div>
                       

<input className="form-control" name="regNumber" value={val.regNumber}
                  onChange={(event) =>{
                    setregNumber(event.target.value);
                  }}
               />
                          </div>

                          </div>

                          <div className="form-row">

<div class="input-group  mb-3">
  <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">
           <i className="fas fa-envelope"></i>
      </span>
  </div>
  <input class="form-control" name="email" value={val.email}
  onChange={(event) =>{
    setemail(event.target.value);
  }}
    />
</div>

<div class="input-group  mb-3">
  <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">
           <i className="fas fa-mobile"></i>
      </span>
  </div>
  <input class="form-control" name="telephone" value={val.telephone}
  onChange={(event) =>{
    settelephone(event.target.value);
  }}
    />
</div>

</div>
<div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1"> <i className="fas fa-user"></i></span>
                              </div>
                              <input type="text" name="username" class="form-control" value={val.username}
                              onChange={(event) =>{
                                setusername(event.target.value);
                              }}
                               />
                          </div>
                           <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1"> <i className="fas fa-lock"></i></span>
                              </div>
                              <input className="form-control" value={val.password}   name="password"
                              onChange={(event) =>{
                                setpassword(event.target.value);
                              }}
                               />
                          </div>
                          <hr/>
                           <label for="exampleFormControlFile1">Company Type</label>                        
<div class="input-group mb-3">
      
                               <select class="form-control" name="userType"
                               onChange={(event) =>{
                                setuserType(event.target.value);
                              }}
                                >
  <option>{val.userType}</option>
</select>
                           </div>

                           
                           <label for="exampleFormControlFile1">Company Services</label>
                                                      
                           <Select
    defaultValue={[options[2], options[3]]}
    isMulti
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={(event) =>{
      setCompanyServices(event.target.value);
    }}
  /> 
                          <div className="form-group">
                          <button className="btn btn-primary btn-block mt-4"  onClick ={addCompanyDetails}>Update Account</button>
              
           </div>

              </div>           
                      
       </form>
          )
        })}
   </div>
   </div>
   </div>
</section>

    </>
  )
}

export default CompanyProfile
