import React, { Component } from 'react';

class UserInfo extends Component {

	handleNewId() {
		this.props.actions.createNewUserId();
	}

	handleNewIdIfOdd() {
		this.props.actions.createNewUserIdIfOdd();
	}

	handleNewIdAsync() {
		this.props.actions.createNewUserIdAsync();
	}

	render() {
		return (
			<div>
				<div>Username: {this.props.user.username}</div>
				<div>Id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update id</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
				<button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
			</div>
		);
	}
}

export default UserInfo;
