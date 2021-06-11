import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import Axios from 'axios';
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Dashboard from "./Dashboard";


export default function Users() {

    
    const [employeeList, setEmployeeList] = useState([]);
    
    const getEmployees = () => {
        Axios.get("https://botswana-railways.herokuapp.com//users").then((response) => {
         setEmployeeList(response.data);
        });
      };
      

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
    Manage Users
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-parent="#accordion">
    <div class="card-body">
      <div class="container"> <button class= "mt-3 mb-5 btn btn-info btn-block" onClick={getEmployees}>Show data</button></div>
 
       

    <div class="table-responsive">
						
							 <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<tr>
              <th> ID </th>
          
              <th> Email </th>
          
              <th> Password </th>
              
            <th>EDIT </th>
            <th>DELETE </th>
							</tr>
						
									
                                    {employeeList.map ((val , key) => {
            return (
                <tr>
                 
                  <td>{val.user_id}</td>
                  
                  <td>{val.email}</td>
                
                  <td>{val.password}</td>
                  <td>
          <form action="" method="post">
                    <input type="hidden" name="edit_id" value=""/>
                    <button  type="submit" name="edit_btn" class="btn btn-success"> APPROVE</button>
                </form>
            </td>
            <td>
           <a href='property.php?del_btn=$post_id'><button class='btn btn-danger'>Decline</button></a>
                
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
