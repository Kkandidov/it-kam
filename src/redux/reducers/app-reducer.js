import {auth} from "./auth-reducer";

const INITIALIZED_APP = 'INITIALIZED_APP';

let initiatedState = {
	initializedApp: false
};

const appReducer = (state = initiatedState, action) => {
	switch (action.type) {
		case INITIALIZED_APP: {
			return {
				...state,
				initializedApp: true
			}
		}
		default:
			return state
	}
};

export const initialized = () => ({type: INITIALIZED_APP});

export const appInitialized = () => {
	return (dispatch) => {
		let promiseAuth = dispatch(auth());

		Promise.all([promiseAuth])
				.then(dispatch(initialized()));
	}
}

export default appReducer;