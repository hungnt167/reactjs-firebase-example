import React from 'react';
import firebase from './firebase.js';

export class AbstractList extends React.Component {
	modelName = '';

	constructor(props) {
	    super(props);

	    this.state = {
	      items: [],
	    }
	}

  componentDidMount() {
    const wordRef = firebase.database().ref(this.modelName);
    wordRef.on('value', (snapshot) => {
      let words = snapshot.val();
      if (typeof(words) === 'object') {
      	words = Object.values(words);
      }
      let newState = [];
      words.forEach(({word, meaning}, id) => {
        newState.push({
          id,
          word,
          meaning,
        })
      });

      this.setState({ items: newState });
    });
  }

  render() {
    return (
    	<div className="uk-child-width-1-2@s" uk-grid="true">
		    {
		        this.state.items.map(({word, meaning}, id) => (
		        	<div key={id} >
				        <div className="uk-card uk-card-default uk-card-small uk-card-body">
				            <h3 className="uk-card-title">{word}</h3>
				            <p>{meaning}</p>
				        </div>
				    </div>
		        ))
		      }
		</div>
    );
  }
}