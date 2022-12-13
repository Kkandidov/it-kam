import {authApi, securityApi} from "../../components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initiatedState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
};

const authReducer = (state = initiatedState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data
			}
		}
		case GET_CAPTCHA_URL_SUCCESS: {
			return {
				...state,
				captchaUrl: action.captchaUrl
			}
		}
		default:
			return state
	}
};

export const setAuthUserData = (userId, login, email, isAuth) =>
		({type: SET_USER_DATA, data: {userId, login, email, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) =>
		({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl: captchaUrl});

export const auth = () => async (dispatch) => {
	let data = await authApi.me();
	if (data.resultCode === 0) {
		let {id, login, email} = data.data;
		dispatch(setAuthUserData(id, login, email, true));
	}
}

export const login = (email, password, rememberMe, captcha = null) => async (dispatch) => {
	debugger;
	let data = await authApi.login(email, password, rememberMe, captcha)
	if (data.resultCode === 0) {
		dispatch(auth());
	} else {

		if (data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}

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

export const getCaptchaUrl = () => async (dispatch) => {
	const data = await securityApi.getCaptcha();
	const captchaUrl = data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;