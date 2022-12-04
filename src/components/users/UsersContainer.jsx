import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching, unFollow} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

let stateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

let dispatchToProps = {
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setTotalUserCount,
	toggleIsFetching
}

const UsersContainer = connect(stateToProps, dispatchToProps)(UsersAPIComponent);

export default UsersContainer;