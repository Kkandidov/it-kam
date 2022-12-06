import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../common/Common";

let stateToProps = (state) => {
	return {
		dialogData: state.dialogPage.dialogData,
		messageData: state.dialogPage.messageData,
		newMessage: state.dialogPage.newMessage
	};
}

let dispatchToProps = (dispatch) => {
	return {
		addNewMessage: () => dispatch(addNewMessageActionCreator()),
		updateNewMessage: (newMessage) => dispatch(updateNewMessageActionCreator(newMessage))
	}
}
let AuthRedirectContainer = withAuthRedirect(Dialogs);
let DialogsContainer = connect(stateToProps, dispatchToProps)(AuthRedirectContainer);

export default DialogsContainer;