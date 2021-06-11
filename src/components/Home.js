import React from "react";
import { Link } from 'react-router-dom';

  const Home = () => {

    return (
      <>
      
      
         <div>
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
  
    <div class="container-fluid">

<div class="row">
    
  <div className="col-md-7 right-header text-white">
    <div className="container">
    <h1 class="w-100 mt-5 ">Botswana <br/>Railways Vendor <br/> Registration</h1>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur maximus justo, et malesuada dolor dictum in. Maecenas nec elit risus. Nunc ut nunc aliquam, blandit magna et, tempus quam</p>
                        
                           <a href="index.html">
                               <button type="button" class="mt-4 btn btn-light">Read More</button>
                           </a>
  </div>
  </div>
  <div class=" col-md-5  py-5">
  <img src="./assets/images/untitled-1.png" className="img-fluid" alt="Image"/>
  </div>
</div>
</div>

         
  </header>

<section>
    <div className="container">
        <h1 className=" mb-3">About Botswana Railways</h1>
        <p className="pb-2">Established in1987, Botswana Railways (BR) forms a crucial link in the Southern African regional railway systems.
             Its strategically laid rail network, supported by good relationships with other rail operators makes Botswana Railways 
             freight services the most suitable, reliable and cost effective mode of transport to use for moving bulk commodities. 
             Botswana Railways Freight Service targets bulk commodities that may be operational challenging for transport by other 
             modes of transport.
</p>
<p>
Botswana Railways aspires to provide total logistics solutions that are in line with its customers
 ‘changing needs and in accordance with global trends. Our commitment is to continuously engage in effective and
  efficient ways of improving service delivery to our customers and ensure stakeholder satisfaction.</p>
</div>
  <div class=" ml-5 mt-5 mb-5">
   <div class="row ml-5">
       <div className="ml-5"></div>
       <div className="ml-5"></div>
       <div className="ml-5"></div>
        <div class="card text-center col-md-2 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" alt="heading-top" />
                    <div class="shadow"></div>
                    <div class="card-title"> We're Free </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card text-center col-md-2 ml-4 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/xUWJuHB.png"  alt="images"/>
                    <div class="card-title"> We're Unbiased </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> We spent thousands of hours creating on algorithm  </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card text-center col-md-2 ml-4 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png"  alt="hedigng"/>
                    <div class="card-title"> We Guide you </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm .</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card text-center col-md-2 ml-4 col-12 ">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png"  alt="scjdsncjsdnjvcn"/>
                    <div class="card-title"> We Guide you </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm .</small> </p>
                    </div>
                </div>
            </div>
        </div>
      
        
    </div>
    </div>
    

</section>


<section>
  <div className="container">
  <div className="row">
    <div className="col-md-6">
    <h4 className="mb-3">SUPPLIER NOTIFICATION</h4>
    <p>Established in1987, Botswana Railways (BR) forms a crucial link in the 
      Southern African regional railway systems. Its strategically laid rail network,
       supported by good relationships with other rail operators makes Botswana Railways 
       freight services the most suitable, reliable and cost effective mode of transport to 
       use for moving bulk commodities. Botswana Railways Freight Service targets bulk commodities 
       that may be operational challenging for transport by other modes of transport.
</p>
<p className="mt-3">
Botswana Railways aspires to provide total logistics solutions that are in line with its customers 
‘changing needs and in accordance with global trends. Our commitment is to continuously engage in effective 
and efficient ways of improving service delivery to our customers and ensure stakeholder satisfaction.</p>
  </div>
  <div className="col-md-6">
  <img src="./assets/images/untitled-1.png" className="img-fluid" alt="Image"/>
  </div>
  </div>
  </div>

  <div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
    <img src="./assets/images/untitled-1.png" className="img-fluid" alt="Image"/>
  </div>
  <div className="col-md-6">

  <h4 className="mt-5 mb-3">VENDOR NOTIFICATION</h4>
    <p>Established in1987, Botswana Railways (BR) forms a crucial link in the 
      Southern African regional railway systems. Its strategically laid rail network,
       supported by good relationships with other rail operators makes Botswana Railways 
       freight services the most suitable, reliable and cost effective mode of transport to 
       use for moving bulk commodities. Botswana Railways Freight Service targets bulk commodities 
       that may be operational challenging for transport by other modes of transport.
</p>
<p className="mt-3">
Botswana Railways aspires to provide total logistics solutions that are in line with its customers 
‘changing needs and in accordance with global trends. Our commitment is to continuously engage in effective 
and efficient ways of improving service delivery to our customers and ensure stakeholder satisfaction.</p>
  </div>
  </div>
  </div>
</section>
    </div>

        
          <p>
          </p>
       
      </>
    );
  

};
export default Home;