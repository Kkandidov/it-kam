import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../store-context";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialog-reducer";

const DialogsContainer = (props) => {
	return (
			<StoreContext.Consumer>
				{
					(store) => {
						let addNewMessage = () => {
							store.dispatch(addNewMessageActionCreator());
						};

						let updateNewMessage = (newMessage) => {
							store.dispatch(updateNewMessageActionCreator(newMessage));
						};

						return <Dialogs state={store.getState().dialogPage}
										addNewMessage={addNewMessage}
										updateNewMessage={updateNewMessage}/>
					}
				}
			</StoreContext.Consumer>
	)
}

export default DialogsContainer;