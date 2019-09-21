import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Notifications from './components/layout/Notifications'

import AdminHome from './components/admin/AdminHome'
import ManageAccommodation from './components/admin/ManageAccommodation'
import ManageAshram from './components/admin/ManageAshram'
import ManageCoordinator from './components/admin/ManageCoordinator'

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
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Notifications />
          <Switch>  
            <Route exact path="/" component={Home}/>


            <Route exact path="/admin" component={AdminHome}/>
            <Route exact path="/admin/accommodation" component={ManageAccommodation}/>
            <Route exact path="/admin/accommodation" component={ManageAshram}/>
            <Route exact path="/admin/accommodation" component={ManageCoordinator}/>


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
            <Route exact path="/faq" component={Faq}/>
            <Route exact path="/staffvolunteer" component={StaffVolunteer}/>
          </Switch>
          
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

