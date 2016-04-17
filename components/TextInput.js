import React, { Component } from 'react';
import TextDisplay from './TextDiplay';

class TextInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputText: ''
		};
	}

	handleChange(e) {
		this.setState({
			inputText: e.target.value
		});
	}

	render() {
		return(
			<div>
				<input
					type="text"
					placeholder='Text here...'
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
				/>
			<TextDisplay text={this.state.inputText}/>
		</div>
		);
	}
}

export default TextInput;
