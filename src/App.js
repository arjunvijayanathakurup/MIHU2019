import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'

class App extends Component{

  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Switch>  
            <Route exact path="/" component={Home}/>
            
            

          </Switch> */}
          
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

