import {authApi} from "../../components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';

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

export const auth = () => async (dispatch) => {
	let data = await authApi.me();
	if (data.resultCode === 0) {
		let {id, login, email} = data.data;
		dispatch(setAuthUserData(id, login, email, true));
	}
}

export const login = (email, password, rememberMe) => async (dispatch) => {
	let data = await authApi.login(email, password, rememberMe)
	if (data.resultCode === 0) {
		dispatch(auth());
	} else {
		debugger;
		let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
		let action = stopSubmit('login', {_error: message});
		dispatch(action);
	}
}

export const logout = () => async (dispatch) => {
	let data = await authApi.logout();
	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}

export default authReducer;