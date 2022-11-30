const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initiatedState = {
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
};

const dialogReducer = (state = initiatedState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.newMessage
			}

			state.messageData.push(newMessage);
			state.newMessage = '';
			return state;
		case UPDATE_NEW_MESSAGE:
			state.newMessage = action.newMessage;
			return state;
		default :
			return state;
	}
};

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) =>
		({type: UPDATE_NEW_MESSAGE, newMessage: text});

export default dialogReducer;