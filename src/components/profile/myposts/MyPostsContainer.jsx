import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	let store = props.store;
	let state = store.getState().profilePage;

	let addPost = () => {
		store.dispatch(addPostActionCreator())
	};

	let updateNewPost = (text) => {
		store.dispatch(updateNewPostActionCreator(text));
	}

	return (<MyPosts postData={state.postData}
					 newPost={state.newPost}
					 addPost={addPost}
					 updateNewPost={updateNewPost}/>)
}

export default MyPostsContainer;