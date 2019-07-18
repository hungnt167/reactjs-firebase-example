import React from 'react';
import firebase from './firebase.js';

export class AddWord extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: {
				id: '',
				word: '',
				meaning: '',
				type: 'words',
			},
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.writeData = this.writeData.bind(this);
	}

	writeData(type, word, meaning) {
		const ref = firebase.database().ref(type);
		ref.push({
			word,
			meaning,
		}, (error) => {
			if (error) {
				alert(error);
				return;
			} 
			this.props.history.replace('/');
			console.log('Data saved successfully!')
		});
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState((prevState) => {
			return {
				data: {
					...prevState.data,
					[name]: value
				}
			}
		});
	}

	handleFormSubmit(event) {
		event.preventDefault();
		let {data} = this.state; 
		let {word, meaning, type} = data; 
		this.writeData(type , word, meaning);
	}


	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
			<fieldset className="uk-fieldset">

			<legend className="uk-legend">New Word</legend>

			<div className="uk-margin">
			<input 
			defaultValue={this.state.data.word}
			onChange={this.handleInputChange}
			className="uk-input" type="text" name="word" placeholder="Word"/>
			</div>

			<div className="uk-margin">
			<textarea 
			value={this.state.data.meaning}
			onChange={this.handleInputChange} 
			className="uk-textarea" rows="5" name="meaning" placeholder="Meaning"></textarea>
			</div>

			<div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
			<label><input 
			defaultChecked={!this.state.data.isAdvancedWord}
			onChange={this.handleInputChange}
			className="uk-radio" type="radio" name="type" value="words"/>Word</label>
			<label><input 
			defaultChecked={this.state.data.isAdvancedWord}
			onChange={this.handleInputChange}
			className="uk-radio" type="radio" name="type" value="advanced_words"/>Advanced Word</label>
			</div>

			<div className="uk-margin">
			<button className="uk-button uk-button-primary">Submit</button>
			</div>

			</fieldset>
			</form>
			);
	}
}