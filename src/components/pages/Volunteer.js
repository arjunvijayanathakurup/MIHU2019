import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import StudentVolunteer from './StudentVolunteer'
import StaffVolunteer from './StaffVolunteers'
import { Tabs, Tab } from 'react-bootstrap';

// volunteers{ name batch campus CONTACT SEVA CORDNAME CORDCONTACT

export default function Volunteer() {
  
  return (
      <div className="container" style={{border: "none"}}> 
      <a href="https://gofile.io/?c=TmmbZ1"><h5>Drinking Water Seva Volunteer List</h5></a>
      <br/  >
        <Tabs defaultActiveKey="student" id="uncontrolled-tab-example">
          
          <Tab eventKey="staff" title="Staff">
            <StaffVolunteer />
          </Tab>
          <Tab eventKey="student" title="Student">
            <StudentVolunteer />
          </Tab>
        </Tabs>

      </div>
    
  );
}
