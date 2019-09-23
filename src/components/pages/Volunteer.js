import React, {useState} from 'react';
import MaterialTable from 'material-table';
import StudentVolunteer from './StudentVolunteer'
import StaffVolunteer from './StaffVolunteers'
import { Tabs, Tab } from 'react-bootstrap';

// volunteers{ name batch campus CONTACT SEVA CORDNAME CORDCONTACT

export default function Volunteer() {
  
  return (
      <div className="container" style={{border: "none"}}> 
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
