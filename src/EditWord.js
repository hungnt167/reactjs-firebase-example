import firebase from './firebase.js';
import {AddWord} from './AddWord';

export class EditWord extends AddWord {
	constructor(props) {
		super(props);
		const { id, type } = props.match.params;
		this.state = {
			data: {
				id: id,
				word: '',
				meaning: '',
				type: type || 'words',
			},
		};

	}

	componentDidMount() {
		const {id, type} = this.state.data;

		if (!id) {
			return;
		}

		firebase.database().ref(`${type}/${id}`).once('value').then(snapshot => {
			const {word, meaning} = snapshot.val();
			this.setState({ data: { id, type, word, meaning }});
		});

	}

	writeData(type, word, meaning) {
		const {id} = this.state.data;
		const ref = firebase.database().ref(`${type}/${id}`);
		ref.update({
			word,
			meaning,
		}, (error) => {
			if (error) {
				alert(error);
				return;
			} 
			console.log('Data updating successfully!')
			this.props.history.replace('/');
		});
	}
}