import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import Axios from 'axios';
import { Alert } from 'react-alert'
import { Link } from 'react-router-dom';
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Dashboard from "./Dashboard";
import Companies from "./Companies";
import Users from "./Users";

export default function AdminPanel() {
  return (
    <>
     <div class="row">

<div class="col-md-2">
<Navbar />
</div>
<div class="col-md-10">
<Dashboard />
     <Footer />
</div>
</div>
    </>
  );
}
