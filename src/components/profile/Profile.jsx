import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = (props) => {
	return (
			<div>
				<ProfileInfo profile={props.profile} status={props.status}/>
				<MyPostsContainer/>
			</div>
	)
}

export default Profile;