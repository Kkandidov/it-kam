import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let stateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
		newPost: state.profilePage.newPost
	}
}

let dispatchToProps = (dispatch) => {
	return {
		addPost: () => dispatch(addPostActionCreator()),
		updateNewPost: (text) => dispatch(updateNewPostActionCreator(text))
	}
}

const MyPostsContainer = connect(stateToProps, dispatchToProps)(MyPosts);

export default MyPostsContainer;