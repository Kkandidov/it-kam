import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../common/Common";
import {getProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.props.getProfile(this.props.router.params.profileId);
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

let stateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
}

let dispatchToProps = {
	getProfile
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(stateToProps, dispatchToProps)(WithUrlDataProfileContainer);