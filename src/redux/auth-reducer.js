import {authApi} from "../components/api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initiatedState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

const authReducer = (state = initiatedState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data
			}
		}
		default:
			return state
	}
};

export const setAuthUserData = (userId, login, email, isAuth) =>
		({type: SET_USER_DATA, data: {userId, login, email, isAuth}});

export const auth = () => {
	return (dispatch) => {
		authApi.me()
				.then(data => {
					if (data.resultCode === 0) {
						let {id, login, email} = data.data;
						dispatch(setAuthUserData(id, login, email, true));
					}
				})
	}
}

export const login = (email, password, rememberMe) => {
	return (dispatch) => {
		authApi.login(email, password, rememberMe)
				.then(data => {
					debugger;
					if (data.resultCode === 0) {
						dispatch(auth());
					}
				});
	}
}

export const logout = () => {
	return (dispatch) => {
		authApi.logout()
				.then(data => {
					if (data.resultCode === 0) {
						dispatch(setAuthUserData(null, null, null, false));
					}
				})
	}
}

export default authReducer;