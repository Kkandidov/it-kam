import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withAuthRedirect, withRouter} from "../common/Common";
import {getProfile, savePhoto, saveProfile, setStatus, updateStatus} from "../../redux/reducers/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {

	refreshProfile() {
		let profileId = this.props.router.params.profileId;
		if (!profileId) {
			profileId = this.props.userId;
		}

		this.props.getProfile(profileId);
		this.props.setStatus(profileId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.router.params.profileId !== prevProps.router.params.profileId) {
			this.refreshProfile();
		}
	}

	render() {
		return <Profile {...this.props}
						profile={this.props.profile}
						status={this.props.status}
						updateStatus={this.props.updateStatus}
						savePhoto={this.props.savePhoto}
						isOwner={!this.props.router.params.profileId}
						saveProfile={this.props.saveProfile}/>
	}
}

let stateToPropsForRouter = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.userStatus,
		userId: state.auth.userId
	}
}

let dispatchToProps = {
	getProfile,
	setStatus,
	updateStatus,
	savePhoto,
	saveProfile
}

export default compose(
		connect(stateToPropsForRouter, dispatchToProps),
		withRouter,
		withAuthRedirect
)(ProfileContainer);