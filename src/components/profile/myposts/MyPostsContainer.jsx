import React from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../store-context";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
	return (
			<StoreContext.Consumer>
				{
					(store) => {
						let state = store.getState().profilePage;

						let addPost = () => {
							store.dispatch(addPostActionCreator())
						};

						let updateNewPost = (text) => {
							store.dispatch(updateNewPostActionCreator(text));
						}

						return <MyPosts postData={state.postData}
										newPost={state.newPost}
										addPost={addPost}
										updateNewPost={updateNewPost}/>
					}
				}
			</StoreContext.Consumer>
	)
}

export default MyPostsContainer;