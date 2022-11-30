import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			postData: [
				{id: 1, message: 'Hi, how are you?', likeCount: 12},
				{id: 2, message: 'It is my firs post.', likeCount: 11},
				{id: 3, message: 'It is my firs post1.', likeCount: 13}
			],
			newPost: 'it-kamasutra.com'
		},
		dialogPage: {
			dialogData: [
				{id: '1', name: 'Kostya'},
				{id: '2', name: 'Vanya'},
				{id: '3', name: 'Sveta'},
				{id: '4', name: 'Misha'},
				{id: '5', name: 'Kolya'}
			],
			messageData: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'How are you?'},
				{id: 3, message: 'It kamasutra?'},
				{id: 4, message: 'Yo'},
				{id: 5, message: 'Yo'}
			],
			newMessage: ''
		},
		sidebar: {}
	},

	_renderTree() {
		console.log('there is no any subscriber')
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._renderTree = observer;
	},

	dispatch(action) {
		profileReducer(this._state.profilePage, action);
		dialogReducer(this._state.dialogPage, action);
		sidebarReducer(this._state.sidebar, action);

		this._renderTree(this._state);
	}
}

export default store;