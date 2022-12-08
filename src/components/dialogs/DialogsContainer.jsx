import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessageActionCreator} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../common/Common";
import {compose} from "redux";

let stateToProps = (state) => {
	return {
		dialogData: state.dialogPage.dialogData,
		messageData: state.dialogPage.messageData,
		newMessage: state.dialogPage.newMessage
	};
}

let dispatchToProps = (dispatch) => {
	return {
		addNewMessage: (newMessage) => dispatch(addNewMessageActionCreator(newMessage))
	}
}

export default compose(
		connect(stateToProps, dispatchToProps),
		withAuthRedirect
)(Dialogs);