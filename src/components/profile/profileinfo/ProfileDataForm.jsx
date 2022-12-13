import {reduxForm} from "redux-form";
import s from './ProfileName.module.css'
import {createField, Input, Textarea} from "../../common/FormControls";
import React from "react";

let ProfileDataForm = (props) => {
	return (
			<form onSubmit={props.handleSubmit}>
				<button>save</button>
				{
						props.error &&
						<div className={s.formSummaryError}>
							{props.error}
						</div>
				}
				<div>
					<b>Profile fullName</b>:
					{createField("Full name", "fullName", Input, [], {"value": 'wer'})}
				</div>
				<div>
					<b>Looking for a job</b>:
					{createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
				</div>
				<div>
					<b>My professional skills</b>:
					{createField("My professional skills", "lookingForAJobDescription", Textarea, [])}
				</div>
				<div>
					<b>About me</b>:
					{createField("About me", "aboutMe", Textarea, [])}
				</div>
				<div>
					<b>Contacts</b>:
					{
						Object.keys(props.profile.contacts).map(key => {
							return <div className={s.contact}>
								<b>{key} : {createField(key, 'contacts.' + key, Input, [])}</b>
							</div>
						})
					}
				</div>
			</form>
	)
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;