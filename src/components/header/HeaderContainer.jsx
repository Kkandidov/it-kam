import Header from "./Header";
import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
				{withCredentials: true})
				.then(resp => {
					if (resp.data.resultCode === 0) {
						let {id, login, email} = resp.data.data;
						this.props.setAuthUserData(id, login, email);
					}
				})
	}

	render() {
		return <Header {...this.props}/>
	}
}

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);