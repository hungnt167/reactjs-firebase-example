import React from 'react';
import {Dashboard} from './Dashboard';
import {AddWord} from './AddWord';
import {EditWord} from './EditWord';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';


class App extends React.Component {


  render() {
    return (
      <div className="uk-container">
         <Router>
            <nav className="uk-navbar-container" uk-navbar="true">
              <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                      <li>
                        <Link to="/dashboard/">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/add/">Add Word</Link>
                      </li>
                  </ul>
              </div>
          </nav>
            <Route path="/" exact component={Dashboard} />
            <Route path="/add/" component={AddWord} />
            <Route path="/edit/:type/:id" component={EditWord} />
            <Route path="/dashboard/" component={Dashboard} />
        </Router>
      </div>
    );
  }
}

export default App;
