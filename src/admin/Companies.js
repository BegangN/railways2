import React, {useState, useEffect} from "react";

import Axios from 'axios';
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Dashboard from "./Dashboard";
import { Alert } from 'react-alert'

export default function Companies() {

  useEffect(() => {
    document.title = "Registered Companies";
  }, []);



  const updateEmployeeWage = (companyId) => {
    Axios.put("https://botswana-railways.herokuapp.com/updateStatus", { status: "Approved", companyId: companyId }).then(
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
              status: "Approved",
              flag: val.flag,
                }
              : val;
          })
        );
        alert("Succesfully Approved");
      }
    );
  };


  const deleteEmployee = (companyId) => {
    Axios.delete(`https://botswana-railways.herokuapp.com/delete/${companyId}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.companyId != companyId;
        })
      );
    });
  };

  
    const [employeeList, setEmployeeList] = useState([]);
    
    const getEmployees = () => {
        Axios.get("https://botswana-railways.herokuapp.com/company").then((response) => {
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
<div id="accordion">

<div class="card">
  <div class="card-header">
    <a class="card-link" data-toggle="collapse" href="#collapseOne">
    Registered Companies
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-parent="#accordion">
    <div class="card-body">
    <div class="container"> </div>
 
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
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Admin Name:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>

          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Company Name:</label>
            <select class="form-control" name="userType"       >
            {employeeList.map ((val , key) => {
         return (
            
<option>{val.companyName}</option>
            )
          })}
</select>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Reason:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
     
        <button type="button" class="btn btn-block btn-warning">Flag</button>
      </div>
    </div>
  </div> 
</div>
 <div class="table-responsive">
                     
                          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                         <tr>
         
           <th> Company Name </th>
           <th> Registration Number </th>
           <th> Telephone </th>
           <th> Email </th>
           <th> Username </th>
           <th> Company </th>
           <th> Status</th>
          
           
           
         <th>Approve </th>
         <th>Decline </th>
                         </tr>
                     
                                 
                                 {employeeList.map ((val , key) => {
         return (
             <tr>
              
               <td>{val.companyName}</td>
               <td>{val.regNumber}</td>
               <td>{val.telephone}</td>
               <td>{val.email}</td>
               <td>{val.username}</td>
               <td>{val.userType}</td>
               <td>{val.status}</td>
              
              

               <td>
               
                
                 <button className="btn btn-info"
                  onClick={() => {
                    updateEmployeeWage(val.companyId);
                  }}
                >
                   {" "}
                  Approve
                </button>
            
         </td>
        
         <td>
         <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"
                  onClick={() => {
                    deleteEmployee(val.companyId);
                  }}
                >
                  Delete
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
