import React, {Component} from 'react';
import {HashRouter,Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Notifications from './components/layout/Notifications'
import Updates from './components/layout/Updates'

import SimpleMap from './components/Maps/Maps'


import AdminHome from './components/admin/AdminHome'
import ManageAccommodation from './components/admin/ManageAccommodation'
import ManageAshram from './components/admin/ManageAshram'
import ManageNotifications from './components/admin/ManageNotifications'
import ManageUpdates from './components/admin/ManageUpdates'
import ManageCoordinator from './components/admin/ManageCoordinator'
import ManageDarshan from './components/admin/ManageDarshan'
import ManageEmergency from './components/admin/ManageEmergency'
import ManageFaq from './components/admin/ManageFaq'
import ManageFood from './components/admin/ManageFood'
import ManageInfo from './components/admin/ManageInfo'
import ManageTransportation from './components/admin/ManageTransportation'
import ManageVCC from './components/admin/ManageVCC'
import ManageVolunteer from './components/admin/ManageVolunteer'
import ManageStaffVolunteer from './components/admin/ManageStaffVolunteer';

import Home from './components/pages/Home'
import Darshan from './components/pages/Darshan'
import Accomodation from './components/pages/Accomodation'
import Food from './components/pages/Food'
import Transportation from './components/pages/Transportation'
import Volunteer from './components/pages/Volunteer'
import Coordinator from './components/pages/Coordinator'
import Ashram from './components/pages/Ashram'
import Emergency from './components/pages/Emergency'
import VCC from './components/pages/VCC'
import Info from './components/pages/Info'
import StaffVolunteer from './components/pages/StaffVolunteers'
import Faq from './components/pages/Faq'

class App extends Component{

  render (){
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Notifications />
          {/* <Updates /> */}
          <Switch>  
            <Route exact path="/" component={Home}/>
            <Route exact path="/darshan" component={Darshan}/>
            <Route exact path="/accommodation" component={Accomodation}/>
            <Route exact path="/food" component={Food}/>
            <Route exact path="/transportation" component={Transportation}/>
            <Route exact path="/emergency" component={Emergency}/>
            <Route exact path="/ashram" component={Ashram}/>
            <Route exact path="/volunteer" component={Volunteer}/>
            <Route exact path="/coordinator" component={Coordinator}/>
            <Route exact path="/vcc" component={VCC}/>
            <Route exact path="/info" component={Info}/>
            <Route exact path="/maps" component={SimpleMap}/>
            <Route exact path="/faq" component={Faq}/>
            <Route exact path="/staffvolunteer" component={StaffVolunteer}/>

            <Route render={() => <h1 className="font-weight-bold text-center pagenotfound">404 Page Not Found!</h1>}/>
          </Switch>
          
          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App;

