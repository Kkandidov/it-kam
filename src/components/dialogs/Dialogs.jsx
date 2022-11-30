import s from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import React from "react";

const Dialogs = (props) => {

	let dialogDataElements = props.state.dialogData.map((data) =>
			<Dialog name={data.name} id={data.id}/>
	);

	let messageDataElements = props.state.messageData.map((data) =>
			<Message message={data.message}/>
	);

	let onAddNewMessage = () => props.addNewMessage();

	let onChangeNewMessage = (event) => {
		let newMessage = event.target.value;
		props.updateNewMessage(newMessage);
	};

	return (
			<div className={s.dialogs}>
				<div className={s.dialog_items}>
					{dialogDataElements}
				</div>
				<div className={s.messages}>
					<div>{messageDataElements}</div>
					<div>
						<div><textarea onChange={onChangeNewMessage}
									   value={props.state.newMessage}
									   placeholder='Enter new message'></textarea></div>
						<div>
							<button onClick={onAddNewMessage}>Send Message</button>
						</div>
					</div>
				</div>
			</div>
	)
}

export default Dialogs;