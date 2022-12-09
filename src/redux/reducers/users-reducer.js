import {userApi} from "../../components/api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"

let initiatedState = {
	users: [],
	pageSize: 20,
	totalUserCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
}

const usersReducer = (state = initiatedState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					return u.id === action.userId
							? {...u, followed: true}
							: u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					return u.id === action.userId
							? {...u, followed: false}
							: u
				})
			}
		case SET_USERS:
			return {...state, users: [...action.users]}
		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}
		case SET_TOTAL_USER_COUNT:
			return {...state, totalUserCount: action.totalCount}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		case TOGGLE_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.followingInProgress
						? [...state.followingInProgress, action.userId]
						: [state.followingInProgress.filter(id => id !== action.userId)]
			}
		default :
			return state
	}
}

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUserCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingInProgress = (followingInProgress, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId})

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		userApi.getUsers(currentPage, pageSize)
				.then(data => {
					dispatch(toggleIsFetching(false));
					dispatch(setUsers(data.items));
					dispatch(setTotalUserCount(data.totalCount));
				})
	}
}

export const unFollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, userId))
		userApi.unfollow(userId)
				.then(data => {
					if (data.resultCode === 0) {
						dispatch(unFollowSuccess(userId));
					}
					dispatch(toggleFollowingInProgress(false, userId))
				})
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, userId))
		userApi.follow(userId)
				.then(data => {
					if (data.resultCode === 0) {
						dispatch(followSuccess(userId));
					}
					dispatch(toggleFollowingInProgress(false, userId))
				})
	}
}

export default usersReducer;