import React from "react";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	let addNewMessage = () => {
		props.store.dispatch(addNewMessageActionCreator());
	};

	let updateNewMessage = (newMessage) => {
		props.store.dispatch(updateNewMessageActionCreator(newMessage));
	};

	return (<Dialogs state={props.store.getState().dialogPage}
					 addNewMessage={addNewMessage}
					 updateNewMessage={updateNewMessage}/>)

}

export default DialogsContainer;