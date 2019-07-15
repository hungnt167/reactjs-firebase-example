import React, { Fragment } from 'react';
import {AdvancedWordList} from './AdvancedWordList';
import {WordList} from './WordList';

export class Dashboard extends React.Component {
  render() {
    return (
      <Fragment>
      	<ul className="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
            <li><a href="#">Word</a></li>
            <li><a href="#">Advanced Words</a></li>
        </ul>
        <ul className="uk-switcher uk-margin uk-align-center">
            <li>
              <WordList/>
            </li>
            <li>
              <AdvancedWordList/>
            </li>
        </ul>
      </Fragment>
    );
  }
}

