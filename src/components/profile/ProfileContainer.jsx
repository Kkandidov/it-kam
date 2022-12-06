import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withAuthRedirect, withRouter} from "../common/Common";
import {getProfile} from "../../redux/profile-reducer";

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

let AuthRedirectContainer = withAuthRedirect(ProfileContainer)
let UrlDataProfileContainer = withRouter(AuthRedirectContainer)

export default connect(stateToPropsForRouter, dispatchToProps)(UrlDataProfileContainer);