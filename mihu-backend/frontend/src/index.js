import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import AddItem from '../src/components/AddItem/Additem';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}></Route>
            <Route path='/add-item' component={AddItem}></Route>

        </div>
    </Router>, 
document.getElementById('root'));

serviceWorker.unregister();
