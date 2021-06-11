import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import Axios from 'axios';
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Dashboard from "./Dashboard";
import ApprovedDashBoard from "./ApprovedDashBoard";
import { Alert } from 'react-alert'

export default function ApprovedCompany() {
    
  const updateFlag = (companyId) => {
    Axios.put("https://botswana-railways.herokuapp.com/flag", { flag: "Flagged",reason : "Does not meet the company regulations",  companyId: companyId }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.companyId == companyId
              ? {
              companyId: val.companyId,
              admin: val.admin,
              reason: "Does not meet the company regulations",             
              flag: "Flagged",
                }
              : val;
          })
        );
        alert("Succesfully Flagged");
      }
    );
  };

    const [employeeList, setEmployeeList] = useState([]);
    
    const getEmployees = () => {
        Axios.get("https://botswana-railways.herokuapp.com/Approvedcompany").then((response) => {
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
<ApprovedDashBoard/>
<div id="Accordion">
<div class="card">
  <div class="card-header">
    <a class="card-link" data-toggle="collapse" href="#collapseOne">
    Approved Companies
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-parent="#accordion">
    <div class="card-body">
 
       

 <div class="table-responsive">
                     
                          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                         <tr>
         
           <th> Company Name </th>
           <th> Registration Number </th>
           <th> Telephone </th>
           <th> Email </th>
           <th>Reason for Flagging</th>
           <th> Username </th>
           <th> Company </th>
        
           
         <th>Flag Status </th>
         <th>Flag </th>
                         </tr>
                     
                                 
                                 {employeeList.map ((val , key) => {
         return (
             <tr>
              
            
               <td>{val.companyName}</td>
               <td>{val.regNumber}</td>
               <td><a href={`tel:${val.telephone}`}>{val.telephone}</a></td> 
               <td> <a href={`mailto:${val.email}?subject=ACCOUNT APPROVAL&body=Good day!!, your company has been successfully approved, you can now access the Botswana Railways Vendor system`}>{val.email}</a></td>
               <td  contenteditable="true">{val.reason}</td>
               <td>{val.username}</td>
               <td>{val.userType}</td>
               <td>{val.flag}</td>

              
         <td>
         <button className="btn btn-warning" onClick={() => {
                    updateFlag(val.companyId);
                  }}
                  >
                  Flag
                </button>
             
         </td>
        
               </tr>
                   
                         

         )
       })}
              
                                 
                     </table>
                 </div>
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
