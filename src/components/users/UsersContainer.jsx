import {connect} from "react-redux";
import {follow, followSuccess, getUsers, setCurrentPage, toggleFollowingInProgress, unFollow, unFollowSuccess} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

let stateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

let dispatchToProps = {
	followSuccess,
	unFollowSuccess,
	setCurrentPage,
	toggleFollowingInProgress,
	getUsers,
	follow,
	unFollow
}

const UsersContainer = connect(stateToProps, dispatchToProps)(UsersAPIComponent);

export default UsersContainer;