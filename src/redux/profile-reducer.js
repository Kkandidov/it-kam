import {profileApi, userApi} from "../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initiatedState = {
	postData: [
		{id: 1, message: 'Hi, how are you?', likeCount: 12},
		{id: 2, message: 'It is my firs post.', likeCount: 11},
		{id: 3, message: 'It is my firs post1.', likeCount: 13}
	],
	newPost: 'it-kamasutra.com',
	profile: null,
	userStatus: ''
};

const profileReducer = (state = initiatedState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				postData: [...state.postData, {id: 4, message: state.newPost, likeCount: 13}],
				newPost: ''
			}
		}
		case UPDATE_NEW_POST: {
			return {
				...state,
				newPost: action.newPost
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_USER_STATUS: {
			return {
				...state,
				userStatus: action.userStatus
			}
		}
		default:
			return state
	}
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newPost: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});

export const getProfile = (profileId) => {
	return (dispatch) => {
		if (!profileId) {
			profileId = 26978;
		}
		userApi.getProfile(profileId)
				.then(data => {
					dispatch(setUserProfile(data))
				})
	}
};

export const setStatus = (userId) => {
	return (dispatch) => {
		profileApi.getUserStatus(userId)
				.then(data => {
					dispatch(setUserStatus(data))
				})
	}
};

export const updateStatus = (userStatus) => {
	return (dispatch) => {
		profileApi.updateUserStatus(userStatus)
				.then(data => {
					if (data.resultCode === 0) {
						dispatch(setUserStatus(userStatus));
					}
				});
	}
};

export default profileReducer;