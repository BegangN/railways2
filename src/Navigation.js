import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
       <header>
   
   <nav class="navbar navbar-expand-lg navbar-light  text-dark">
     <div class="container">
       <a class="navbar-brand" href="index.html">
       <img src="./assets/images/logo.png" class="img-responsive" alt="Image"/>
       </a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarResponsive">
       <ul class="navbar-nav ml-auto">

<li class="nav-item">

<a class="nav-link font-weight-bold text-darks" href="https://www.botswanarailways.co.bw">Home</a>
</li>
<li class="nav-item">
    <a class="nav-link font-weight-bold" href="https://www.botswanarailways.co.bw/profile">About</a>
  </li>
<li class="nav-item">
  <a class="nav-link font-weight-bold" href="https://www.botswanarailways.co.bw/services-0">Services</a>
</li>
<li class="nav-item ml-5">
<a class="nav-link font-weight-bold" href={'/company-profile'}>Company Profile</a>
</li>
</ul>
         <Link to="/">
      <button type="button" className="ml-5 btn btn-primary">
      Sign out
      </button>
  </Link>
       </div>
     </div>
   </nav>
 
   <div class="container-fluid ">
 
 <div class="row">
   
 <div class="col-md-12 bg-info center text-white">
   
   <h1 class="w-100 mt-5">Company Profile</h1>
   <ul class="coustom-breadcrumb">
         <li><a href={"/home"}>Home</a></li>
         <li>Profile</li>
       </ul>                  
 </div>
 </div>
 </div>
 
        
 </header>
    </>
  )
}

export default Navigation
