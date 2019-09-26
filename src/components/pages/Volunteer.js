import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import StudentVolunteer from './StudentVolunteer'
import StaffVolunteer from './StaffVolunteers'
import { Tabs, Tab } from 'react-bootstrap';
import boy1 from './img/b1.jpg'
import girl1 from './img/g0.jpg'
import girl2 from './img/g1.jpg'


// volunteers{ name batch campus CONTACT SEVA CORDNAME CORDCONTACT

export default function Volunteer() {
  
  return (
      <div className="container" style={{border: "none"}}> 
      <a href="https://gofile.io/?c=TmmbZ1"><h5>Other Campus Seva Volunteer List</h5></a>
      <br/  >
        <Tabs defaultActiveKey="student" id="uncontrolled-tab-example">
          
          <Tab eventKey="staff" title="Staff">
            <StaffVolunteer />
          </Tab>
          <Tab eventKey="student" title="Student">
            <StudentVolunteer />
          </Tab>
          <Tab eventKey="cordinators" title="Coordinators">
          <img src={boy1} alt="English" style={{width: "100%" , marginBottom: "10px",  marginTop: "10px"}}/>
          <br/><br/>
        <img src={girl1} alt="Malayalam" style={{width: "100%", marginBottom: "10px"}}/>
        <br/><br/>
        <img src={girl2} alt="Tamil" style={{width: "100%" , marginBottom: "10px"}} />
        <br/><br/>
          </Tab>
        </Tabs>
        
      </div>
    
  );
}
