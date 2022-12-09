import {createSelector} from "reselect";

export const fetchUsers = (state) => {
	return state.usersPage.users;
}

export const fetchUsersSuperSelector = createSelector(fetchUsers, (users) => {
	return users.filter(u => true);
});

export const fetchPageSize = (state) => {
	return state.usersPage.pageSize;
}

export const fetchTotalUserCount = (state) => {
	return state.usersPage.totalUserCount;
}

export const fetchCurrentPage = (state) => {
	return state.usersPage.currentPage;
}

export const fetchIsFetching = (state) => {
	return state.usersPage.isFetching;
}

export const fetchFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
}

