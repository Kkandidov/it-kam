import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "../common/Common";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let profileId = this.props.router.params.profileId;
		if (!profileId) {
			profileId = 2;
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
				.then(resp => {
					this.props.setUserProfile(resp.data)
				})
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
	setUserProfile
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(stateToProps, dispatchToProps)(WithUrlDataProfileContainer);