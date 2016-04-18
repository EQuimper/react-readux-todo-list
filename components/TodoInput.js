import React, { Component } from 'react';
import actions from '../redux/actions';

class TodoInput extends Component {

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

	handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch(actions.addTodo(this.state.inputText));
	}

	render() {
		return(
			<div>
				<input
					type="text"
					placeholder='Type in your todo'
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
				/>
			<button onClick={this.handleSubmit.bind(this)}>Submit</button>
		</div>
		);
	}
}

export default TodoInput;