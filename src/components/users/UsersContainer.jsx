import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUserCount, setUsers, toggleFollowingInProgress, toggleIsFetching, unFollow} from "../../redux/users-reducer";
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
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setTotalUserCount,
	toggleIsFetching,
	toggleFollowingInProgress
}

const UsersContainer = connect(stateToProps, dispatchToProps)(UsersAPIComponent);

export default UsersContainer;