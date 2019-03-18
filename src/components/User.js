import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		isVisible: false
	// 	};
	// },
	// constructor(props) {
	// 	super(props);
	// 	this.onClickEvent = this.onClickEvent.bind(this);
	// }
	state = {
		isVisible: false
	};

	onClickEvent = (e) => {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}

	onDeleteUser = (e) => {
		const { id, deleteUser } = this.props;

		deleteUser(id);
	}

	render() {
		const { name, department, salary } = this.props;
		const { isVisible } = this.state;

		return (
			<div className="col-md-8 mb-4">
				<div className="card">
					<div className="card-header d-flex justify-content-between">
						<h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
						<i onClick={this.onDeleteUser} className="far fa-trash-alt" style={{ cursor: 'pointer' }} />
					</div>
					{
						isVisible ?
							<div className="card-body">
								<p className="card-text">Maaş : {salary}</p>
								<p className="card-text">department : {department}</p>
							</div> : null
					}
				</div>
			</div>
		);
	}
}

User.defaultProps = {
	name: 'Bilgi Yok',
	salary: 'Bilgi Yok',
	department: 'Bilgi Yok'
};

User.propTypes = {
	name: PropTypes.string.isRequired,
	salary: PropTypes.string.isRequired,
	department: PropTypes.string.isRequired,
	deleteUser: PropTypes.func.isRequired
};
export default User;
