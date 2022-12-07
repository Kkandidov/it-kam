import s from './ProfileName.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <div><Preloader/></div>
	}

	return (
			<div>
				{/*<div>*/}
				{/*	<img src='data:image/jpeg;base64,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'/>*/}
				{/*</div>*/}
				<div className={s.description}>
					<div>
						<img src={props.profile.photos.large}/>
					</div>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
				</div>
			</div>
	)
}

export default ProfileInfo;