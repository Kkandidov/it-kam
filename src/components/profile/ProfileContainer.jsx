import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withAuthRedirect, withRouter} from "../common/Common";
import {getProfile, setStatus, updateStatus} from "../../redux/reducers/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let profileId = this.props.router.params.profileId;
		if (!profileId) {
			profileId = this.props.userId;
		}

		this.props.getProfile(profileId);
		this.props.setStatus(profileId);
	}

	render() {
		return <Profile {...this.props}
						profile={this.props.profile}
						status={this.props.status}
						updateStatus={this.props.updateStatus}/>
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
	updateStatus
}

export default compose(
		connect(stateToPropsForRouter, dispatchToProps),
		withRouter,
		withAuthRedirect
)(ProfileContainer);