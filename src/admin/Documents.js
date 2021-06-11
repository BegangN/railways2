import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import Axios from 'axios';
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Dashboard from "./Dashboard";


export default function Documents() {
  
  const [data, getFile] = useState({ path: "" });
   
  const [employeeList, setEmployeeList] = useState([]);
    
  const getEmployees = () => {
      Axios.get("https://botswana-railways.herokuapp.com/documents").then((response) => {
       setEmployeeList(response.data);
      });
    };
    useEffect(() => {
      getEmployees();
    });

  return (
    <>
    <div class="">
    <div class="row">

<div class="col-md-2">
<Navbar />
</div>
<div class="col-md-10">
<Dashboard />
<div class="card">
 
 <div id="collapseOne" class="collapse show" data-parent="#accordion">
    <div class="card-body">
 
       

 <div class="table-responsive">
                     
                          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                         <tr>
           <th> Company Name </th>
           <th> Document Name </th>
          
        
        
                         </tr>
                     
                                 
                                 {employeeList.map ((val , key) => {
         return (
             <tr>
              
               
               <td><p>{val.companyName}</p></td>
               <td>
               <a href={`documents/${val.documents}`}>{val.documents}</a></td>

              
         
        
               </tr>
                   
                         

         )
       })}
              
                                 
                     </table>
                 </div>
             </div>
         </div>
     </div>
 <Footer />
    </div>
  </div>
</div> 
 


    </>
  );
}
