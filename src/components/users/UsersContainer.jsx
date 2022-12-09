import {connect} from "react-redux";
import {follow, followSuccess, getUsers, setCurrentPage, toggleFollowingInProgress, unFollow, unFollowSuccess} from "../../redux/reducers/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";
import {fetchCurrentPage, fetchFollowingInProgress, fetchIsFetching, fetchPageSize, fetchTotalUserCount, fetchUsers, fetchUsersSuperSelector} from "../../redux/selectors/user-selector";

let stateToProps = (state) => {
	return {
		// users: fetchUsers(state),
		users: fetchUsersSuperSelector(state),
		pageSize: fetchPageSize(state),
		totalUserCount: fetchTotalUserCount(state),
		currentPage: fetchCurrentPage(state),
		isFetching: fetchIsFetching(state),
		followingInProgress: fetchFollowingInProgress(state)
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