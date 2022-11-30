const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initiatedState = {
	postData: [
		{id: 1, message: 'Hi, how are you?', likeCount: 12},
		{id: 2, message: 'It is my firs post.', likeCount: 11},
		{id: 3, message: 'It is my firs post1.', likeCount: 13}
	],
	newPost: 'it-kamasutra.com'
};

const profileReducer = (state = initiatedState, action) => {
	switch (action.type) {
		case ADD_POST:
			let post = {
				id: 4,
				message: state.newPost,
				likeCount: 13
			}

			state.postData.push(post);
			state.newPost = '';
			return state;
		case UPDATE_NEW_POST:
			state.newPost = action.newPost;
			return state;
		default:
			return state
	}
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) =>
		({type: UPDATE_NEW_POST, newPost: text});

export default profileReducer;