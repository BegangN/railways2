import React from 'react';
import FormLogin from './FormLogin';

export default function Form() {
  return (
<div class="mt-5 container-fluid header h-100">
<div class="small-logo text-center">
                           
                           <img src="./assets/images/logo.png" class="img-responsive" alt="Logo"/>
                           
                       </div>
       <div class="mt-5 row no-margin h-100">
           
           <div class="col-sm-12 no-padding login-box h-100">
               <div class="row no-margin w-100">
                  <div class="col-lg-6 col-md-6 box-de">
                    
                       <div class="ditk-inf sup-oi">
                           <h1 class="w-100 mt-5">Botswana <br/>Railways Vendor <br/> Registration</h1>
                           <p>Botswana Railways aspires to provide total logistics solutions that are in line with its customers 
                               ‘changing needs and in accordance with global trends. Our commitment is to continuously engage in effective
                                and efficient ways of improving service delivery to our customers and ensure stakeholder satisfaction.</p>
                        
                           <a href="https://www.botswanarailways.co.bw/profile">
                               <button type="button" class="mt-4 btn btn-outline-light">Read More</button>
                           </a>
                       </div>
                   </div>
                   <div class="col-lg-6 col-md-6 log-det">
                <FormLogin />
                </div>
               </div>
           </div>
            
       </div>
   </div>
    
  );
}
