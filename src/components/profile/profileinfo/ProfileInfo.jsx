import s from './ProfileName.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from "./../../../assets/images/img.png";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const Contact = ({contactTitle, contactValue}) => {
	return (
			<div className={s.contact}>
				<b>{contactTitle}</b>: {contactValue}
			</div>
	)
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
	return (
			<>
				{isOwner &&
						<button onClick={toEditMode}>edit</button>
				}
				<div>
					<b>Profile fullName</b>: {profile.fullName}
				</div>
				<div>
					<b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
				</div>
				{profile.lookingForAJob &&
						<div>
							<b>My professional skills</b>: {profile.lookingForAJobDescription}
						</div>
				}
				<div>
					<b>About me</b>: {profile.aboutMe}
				</div>
				<div>
					<b>Contacts</b>:
					{
						Object.keys(profile.contacts).map(key => {
							return <Contact key={key}
											contactTitle={key}
											contactValue={profile.contacts[key]}/>
						})
					}
				</div>
			</>
	)
}

const ProfileInfo = (props) => {

	const [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <div><Preloader/></div>
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		props.saveProfile(formData)
				.then(() => {
					setEditMode(false)
				});
	}

	return (
			<div>
				<div className={s.description}>
					<div>
						<img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
						{props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
					</div>
					{editMode
							? <ProfileDataForm initialValues={props.profile}
											   profile={props.profile}
											   onSubmit={onSubmit}/>
							: <ProfileData profile={props.profile}
										   toEditMode={() => setEditMode(true)}
										   isOwner={props.isOwner}
							/>}
					<ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
				</div>
			</div>
	)
}

export default ProfileInfo;