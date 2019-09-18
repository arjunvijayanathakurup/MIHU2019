import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Darshan from './components/pages/Darshan'

class App extends Component{

  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>  
            <Route exact path="/" component={Home}/>
            <Route exact path="/darshan" component={Darshan}/>
            

          </Switch>
          
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

