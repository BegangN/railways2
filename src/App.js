import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/Form';
import Home from './components/Home';
import FormSignup from './components/FormSignup';
import CompanyProfile from './components/CompanyProfile';
import Admin from './admin/Admin';
import Companies from './admin/Companies';
import Users from './admin/Users';
import AdminPanel from './admin/AdminPanel';
import Documents from './admin/Documents';
import CompanyDocuments from './components/CompanyDocuments';
import ApprovedCompany from './admin/ApprovedCompany';
import FlaggedCompany from './admin/FlaggedCompany';
import NewUser from './components/NewUser';
import ContactUs from './components/contactForm';

const App = () => {
  return (
  
      <Router>
        <Switch>
          
      <Route exact path="/home" component={Home} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin-panel" component={AdminPanel} />
      <Route exact path="/manage-users" component={Users} />
      <Route exact path="/manage-companies" component={Companies} />
      <Route exact path="/Approved-company" component={ApprovedCompany} />
      <Route exact path="/Flagged-company" component={FlaggedCompany} />
      <Route exact path="/NewUser" component={NewUser} />
      <Route exact path="/manage-documents" component={Documents} />
        <Route exact path="/" component={Form} />
        <Route exact path="/company-documents" component={CompanyDocuments} />
        <Route exact path="/signup" component={FormSignup} />
        <Route exact path="/company-profile" component={CompanyProfile} />
        <Route exact path="/contact" component={ContactUs} />
        </Switch>
      </Router>
  
);
};

export default App;