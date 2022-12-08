import s from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

	let dialogDataElements = props.dialogData.map((data) =>
			<Dialog name={data.name} id={data.id}/>
	);

	let messageDataElements = props.messageData.map((data) =>
			<Message message={data.message}/>
	);

	let addNewMessage = (values) => props.addNewMessage(values.newMessage);

	let NewMessageForm = (props) => {
		return (
				<form onSubmit={props.handleSubmit}>
					<div>
						<Field component={'textarea'} name={'newMessage'} placeholder='Enter new message'/>
					</div>
					<div>
						<button>Send Message</button>
					</div>
				</form>
		);
	}

	let NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm);

	return (
			<div className={s.dialogs}>
				<div className={s.dialog_items}>
					{dialogDataElements}
				</div>
				<div className={s.messages}>
					<div>{messageDataElements}</div>
					<NewMessageReduxForm onSubmit={addNewMessage}/>
				</div>
			</div>
	)
}

export default Dialogs;