import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = (props) => {
	return (
			<div>
				<ProfileInfo/>
				<MyPostsContainer store={props.store}/>
			</div>
	)
}

export default Profile;