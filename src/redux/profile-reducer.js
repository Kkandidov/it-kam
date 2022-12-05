const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initiatedState = {
	postData: [
		{id: 1, message: 'Hi, how are you?', likeCount: 12},
		{id: 2, message: 'It is my firs post.', likeCount: 11},
		{id: 3, message: 'It is my firs post1.', likeCount: 13}
	],
	newPost: 'it-kamasutra.com',
	profile: null
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
		default:
			return state
	}
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newPost: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})

export default profileReducer;