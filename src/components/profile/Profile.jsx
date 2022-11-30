import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = (props) => {
	return (
			<div>
				<ProfileInfo/>
				<MyPostsContainer/>
			</div>
	)
}

export default Profile;