const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"

let initiatedState = {
	users: [],
	pageSize: 20,
	totalUserCount: 0,
	currentPage: 1
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
		default :
			return state
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUserCountAC = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount: totalCount})

export default usersReducer;