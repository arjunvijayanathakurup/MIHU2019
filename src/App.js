import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


import Home from './components/pages/Home'
import Darshan from './components/pages/Darshan'
import Accomodation from './components/pages/Accomodation'
import Food from './components/pages/Food'
import Transportation from './components/pages/Transportation'
import Volunteer from './components/pages/Volunteer'
import Coordinator from './components/pages/Coordinator'
class App extends Component{

  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>  
            <Route exact path="/" component={Home}/>
            <Route exact path="/darshan" component={Darshan}/>
            <Route exact path="/accommodation" component={Accomodation}/>
            <Route exact path="/food" component={Food}/>
            <Route exact path="/transportation" component={Transportation}/>
            <Route exact path="/volunteer" component={Volunteer}/>
            <Route exact path="/coordinator" component={Coordinator}/>
          </Switch>
          
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

