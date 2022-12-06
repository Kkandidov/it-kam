import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withAuthRedirect, withRouter} from "../common/Common";
import {getProfile} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.props.getProfile(this.props.router.params.profileId);
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

let stateToPropsForRouter = (state) => {
	return {
		profile: state.profilePage.profile
	}
}

let dispatchToProps = {
	getProfile
}

export default compose(
		connect(stateToPropsForRouter, dispatchToProps),
		withRouter,
		// withAuthRedirect
)(ProfileContainer);