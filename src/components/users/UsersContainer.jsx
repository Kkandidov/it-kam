import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let stateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let dispatchToProps = (dispatch) => {
	return {
		follow: (userId) => dispatch(followAC(userId)),
		unFollow: (userId) => dispatch(unFollowAC(userId)),
		setUsers: (users) => dispatch(setUsersAC(users)),
	}
}

const UsersContainer = connect(stateToProps, dispatchToProps)(Users);

export default UsersContainer;