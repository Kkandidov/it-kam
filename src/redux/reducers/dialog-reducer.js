const ADD_MESSAGE = 'dialog/ADD-MESSAGE';

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
	]
};

const dialogReducer = (state = initiatedState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				messageData: [...state.messageData, {id: 4, message: action.newMessage}]
			};
		}
		default :
			return state;
	}
};

export const addNewMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage});

export default dialogReducer;