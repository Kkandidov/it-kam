import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/reducers/profile-reducer";
import {connect} from "react-redux";

let stateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
		newPost: state.profilePage.newPost
	}
}

let dispatchToProps = (dispatch) => {
	return {
		addPost: (newPost) => dispatch(addPostActionCreator(newPost))
	}
}

const MyPostsContainer = connect(stateToProps, dispatchToProps)(MyPosts);

export default MyPostsContainer;