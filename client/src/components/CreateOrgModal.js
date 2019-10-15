import React from 'react';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createOrganisation } from '../actions/Action';

const initialState = {
	orgName: '',
	location: ''
}

class CreateOrgModal extends React.Component {
	state = initialState;

	changeValue = (e) => {
		const key = e.target.name;
		this.state[key] = e.target.value;
		this.setState(this.state);
	}

	onClickHandler = (e) => {
		const { orgName, location, creator } = this.state;
		const { handleCreateOrgModal, createOrganisation } = this.props;
		e.preventDefault();

		const data = new FormData();
		// data.append('file', selectedFile);
		data.append('name', orgName);
		data.append('location', location);
		data.append('creator', creator);

		createOrganisation(data);
		this.setState(initialState, () => handleCreateOrgModal());
	}

	handleCloseModal = () => {
		const { handleCreateOrgModal } = this.props;
		this.setState(initialState, () => handleCreateOrgModal());
	}


	render() {
		const { isCreateOrgModalOpen } = this.props;

		return (
			<Dialog onClose={this.handleCloseModal} aria-labelledby="simple-dialog-title" open={isCreateOrgModalOpen}>
				<DialogTitle id="simple-dialog-title">Create Organisation</DialogTitle>
				<div className="landing-container">
					<form onSubmit={this.onClickHandler} encType="multipart/form-data" className="landing-form ">
						<div className='form-container'>
							<div className="fiv">
								<input className='input' type="text" value={this.state.orgName} onChange={this.changeValue} name="orgName" placeholder='org name' />
							</div>
							<div className="fiv">
								<input className='input' type="text" value={this.state.location} onChange={this.changeValue} name="location" placeholder='location' />
							</div>
							<button type="submit" className="button bg-primary">Create</button>
						</div>
					</form>
				</div>
			</Dialog>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.token,
	}
}

export default connect(mapStateToProps, { createOrganisation })(CreateOrgModal);