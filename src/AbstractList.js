import React from 'react';
import firebase from './firebase.js';

export class AbstractList extends React.Component {
	modelName = '';

	constructor(props) {
	    super(props);

	    this.state = {
	      items: [],
	    };

      this.handleClickDelete.bind(this);
      this.handleClickEdit.bind(this);
	}

  componentDidMount() {
    const wordRef = firebase.database().ref(this.modelName);
    wordRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let keys = false;
      if (typeof(items) === 'object') {
      	keys = Object.keys(items);
        items = Object.values(items);
      }
      let newState = [];
      items.forEach(({word, meaning}, index) => {
        newState.push({
          id: keys ? keys[index] : index,
          word,
          meaning,
        })
      });

      this.setState({ items: newState });
    });
  }

  handleClickDelete(e, id) {
    e.stopPropagation();
    let ref = firebase.database().ref(this.modelName + '/' + id);
    ref.remove()
    .then(res => 
      console.log('Success!')
    ).catch(err => alert(err));
  }

  handleClickEdit(e, id) {
    e.stopPropagation();
    this.props.history.replace('/edit/' + this.modelName + '/' + id);
  }

  render() {
    return (
    	<div className="uk-child-width-1-2@s" uk-grid="true">
		    {
		        this.state.items.map(({word, meaning, id}, key) => (
		        	<div key={id} >
				        <div className="uk-card uk-card-default uk-card-small uk-card-body" onClick={(e) => this.handleClickEdit(e, id)}>
                    <div className="uk-card-badge uk-label uk-label-danger" onClick={(e) => this.handleClickDelete(e, id)}>Delete</div>
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