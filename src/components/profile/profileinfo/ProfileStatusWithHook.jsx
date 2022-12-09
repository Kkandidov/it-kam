import React, {useState} from "react";

const ProfileStatusWithHook = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	let activateEditMode = () => {
		setEditMode(true);
	}

	let deActivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	let onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
			<div>
				{!editMode &&
						<div>
							<span onDoubleClick={activateEditMode}>{props.status}</span>
						</div>
				}
				{editMode &&
						<div>
							<input onChange={onStatusChange}
								   autoFocus={true}
								   onBlur={deActivateEditMode}
								   value={status}></input>
						</div>
				}
			</div>
	)
}

export default ProfileStatusWithHook;