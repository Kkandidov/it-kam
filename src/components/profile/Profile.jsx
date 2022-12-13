import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = (props) => {
	return (
			<div>
				<ProfileInfo profile={props.profile}
							 status={props.status}
							 updateStatus={props.updateStatus}
							 isOwner={props.isOwner}
							 savePhoto={props.savePhoto}
							 saveProfile={props.saveProfile}/>
				<MyPostsContainer/>
			</div>
	)
}

export default Profile;