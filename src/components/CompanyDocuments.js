import React, { useRef, useState } from 'react';
import axios from 'axios';
import Navigation from "../Navigation";
const CompanyDocuments = () => {

  const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
  
  const [companyName, setcompanyName] = useState("");
  const [data, getFile] = useState({ name: "", path: "" });    const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
      setProgess(0)
      const file = e.target.files[0]; // accesing file
      console.log(file);
      setFile(file); // storing file
  }
  const uploadFile = () => {
      const formData = new FormData();      formData.append('file', file); formData.append('companyName',companyName); // appending file
      axios.post('https://botswana-railways.herokuapp.com//upload', formData, {
        companyName: companyName,
          onUploadProgress: (ProgressEvent) => {
              let progress = Math.round(
              ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
              setProgess(progress);
          }
      }).then(res => {
          console.log(res);
          
          getFile({ name: res.data.name,
                   path: 'https://botswana-railways.herokuapp.com/' + res.data.path
                 })
      }).catch(err => console.log(err))}
  return (
    <>
    < Navigation />
      <section class="user_profile inner_pages">
  <div class="container">
    
    <div class="mt-5 row">
      <div class="col-md-3 col-sm-3">
        <div class="profile_nav">
          <ul>
            <li><a href={'/company-profile'}>Profile Settings</a></li>
              <li><a href={'/company-notification'}>Notifications</a></li>
              <li><a href={'/company-documents'}>Documents</a></li>
              
            
          </ul>
        </div>
      </div>    
      <div class="col-md-9 col-sm-9">
     <div id="accordion">

<div class="card">
  <div class="card-header">
    <a class="card-link" data-toggle="collapse" href="#collapseOne">
    Upload documents
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-parent="#accordion">
    <div class="card-body">
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
    <div class="form-group">
                        <label class="col-sm-3 control-label">
                            Attachment(s)
                            (Attach multiple files.)
                        </label>
                        <div class="col-sm-9">
                            <span class="btn btn-default btn-file">
                            <div className="file-upload"></div>
                <input type="file" name="input2[]" ref={el} onChange={handleChange} />                <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div>
               
            <hr /></span>
                            <br/>
                            <button  onClick={uploadFile}  className="mt-4 btn btn-outline-info">Upload</button>
                        </div>
                    </div>

                      {/* displaying received image*/}
 {data.path && <a href={data.path} alt={data.name}>visit</a>}
             </div>
         </div>
     </div>
 </div> 
 </div>



           
          
   </div>
   </div>
</section>
    </>
  )
}

export default CompanyDocuments
