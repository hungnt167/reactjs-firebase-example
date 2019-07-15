import React from 'react';
import {AdvancedWordList} from './AdvancedWordList';
import {WordList} from './WordList';
import {AddWord} from './AddWord';


import './App.css';


class App extends React.Component {


  render() {
    return (
      <div className="uk-container">
        <ul className="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
            <li><a href="#">Word</a></li>
            <li><a href="#">Advanced Words</a></li>
            <li><a href="#">Add New</a></li>
        </ul>

        <ul className="uk-switcher uk-margin uk-align-center">
            <li>
              <WordList/>
            </li>
            <li>
              <AdvancedWordList/>
            </li>
             <li>
              <AddWord/>
            </li>
        </ul>
      </div>
    );
  }
}

export default App;
