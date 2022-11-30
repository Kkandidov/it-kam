const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

let initiatedState = {
	users: [
		{id: 1, photoUrl: 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg', followed: false, fullName: 'Dima', status: 'I am a boss1', location: {city: 'Minsk', country: 'Belarus'}},
		{id: 2, photoUrl: 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg', followed: true, fullName: 'Kostya', status: 'I am a boss2', location: {city: 'Moskwa', country: 'Russia'}},
		{id: 3, photoUrl: 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg', followed: false, fullName: 'Lesha', status: 'I am a boss3', location: {city: 'Piter', country: 'Russia'}},
		{id: 4, photoUrl: 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg', followed: true, fullName: 'Saha', status: 'I am a boss4', location: {city: 'Kiev', country: 'Ukraine'}},
		{id: 5, photoUrl: 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg', followed: true, fullName: 'Sveta', status: 'I am a boss5', location: {city: 'Wroclaw', country: 'Poland'}}
	]
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
			return {...state, users: [...state.users, ...action.users]}
		default :
			return state
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer;