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
import Login from "./Login";

export default function Admin() {
   
    return (
   
      <div className="maincontainer">
         < Login />
     
      </div>
     
)
};

