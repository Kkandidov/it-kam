import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../common/Common";
import {getProfile, setStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.props.getProfile(this.props.router.params.profileId);
		this.props.setStatus(this.props.router.params.profileId);
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
	}
}

let stateToPropsForRouter = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.userStatus,
	}
}

let dispatchToProps = {
	getProfile,
	setStatus
}

export default compose(
		connect(stateToPropsForRouter, dispatchToProps),
		withRouter,
		// withAuthRedirect
)(ProfileContainer);