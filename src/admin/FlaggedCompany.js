import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import Axios from 'axios';
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Dashboard from "./Dashboard";
import FlaggedDashBoard from "./FlaggedDashBoard";


export default function FlaggedCompany() {
    

  const [companyName, setcompanyName] = useState("");
    const [admin, setAdmin] = useState("");
    const [reason, setReason] = useState("");

  const updateFlag = (companyId) => {
    Axios.put("https://botswana-railways.herokuapp.com/unflag", { flag: "Nil", companyName, admin, reason, companyId: companyId }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.companyId == companyId
              ? {
              companyId: val.companyId,
              companyName: val.companyName,
             regNumber: val.regNumber,
             telephone: val.telephone,
             email: val.email,
             username: val.username,
             userType: val.userType,
             status: val.status,
              flag: "Nil",
              admin,
              reason
                }
              : val;
          })
        );
        alert("Succesfully unFlagged");
      }
    );
  };

    const [employeeList, setEmployeeList] = useState([]);
    
    const getEmployees = () => {
        Axios.get("https://botswana-railways.herokuapp.com/Flaggedcompany").then((response) => {
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
<FlaggedDashBoard />
<div id="accordion">
{employeeList.map ((val , key) => {
         return (
            
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reasons For Flagging this company</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Admin Name:</label>
            <input type="text" class="form-control" onChange={(event) =>{
                      setAdmin(event.target.value);
                    }}/>
          </div>

          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Company Name:</label>
            <select class="form-control" name="userType" onChange={(event) =>{
                      setcompanyName(event.target.value);
                    }}      >
           
<option>{val.companyName}</option>
           
</select>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Reason:</label>
            <select class="form-control" name="userType" onChange={(event) =>{
                      setcompanyName(event.target.value);
                    }}      >
           
<option>not paying</option>
<option>not subscribing</option>
<option>no documents</option>
           
</select>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Reason:</label>
            <textarea class="form-control" id="message-text" onChange={(event) =>{
                      setReason(event.target.value);
                    }}></textarea>
          </div>
        
      </div>
      <div class="modal-footer">
      
            
        <button type="button" class="btn btn-block btn-warning "  onClick={() => {
                    updateFlag(val.companyId);
                  }}
                >
                   {" "}unFlag</button>

      </div>
    </div>
  </div>
</div>
 )
})}
<div class="card">
  <div class="card-header">
    <a class="card-link" data-toggle="collapse" href="#collapseOne">
   Flagged Companies
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-parent="#accordion">
    <div class="card-body">
    
       

 <div class="table-responsive">
                     
                          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                         <tr>
           
           <th> Company Name </th>
           <th>Admin Name</th>
           <th>Reason for Flagging</th>
          
        
           
         <th>Flag Status </th>
         <th>Flag </th>
                         </tr>
                     
                                 
                                 {employeeList.map ((val , key) => {
         return (
             <tr>
              
               
               <td  contenteditable="true">{val.companyName}</td>
               <td  contenteditable="true">Admin</td>
               <td  contenteditable="true">{val.reason}</td>
               
               <td  contenteditable="true">{val.flag}</td>

              
         <td>
         <button className="btn btn-warning" onClick={() => {
                    updateFlag(val.companyId);
                  }}
                  >
                  Unflag
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
