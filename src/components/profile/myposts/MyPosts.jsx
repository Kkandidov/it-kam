import s from './MyPosts.module.css'
import Post from "./post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

	let postDataElements = props.postData.map(p =>
			<Post message={p.message} likeCount={p.likeCount}/>
	);

	let addNewPost = (values) => (props.addPost(values.newPost));

	let NewPostForm = (props) => {
		return (
				<form onSubmit={props.handleSubmit}>
					<Field name={'newPost'}
						   placeholder={'add new post'}
						   component={'textarea'}/>
					<div>
						<button>Add post</button>
					</div>
				</form>
		)
	}

	let NewPostReduxForm = reduxForm({form: 'NewPost'})(NewPostForm);

	return (
			<div className={s.postsBlock}>
				<h3>My posts</h3>
				<NewPostReduxForm onSubmit={addNewPost}/>
				<div className={s.posts}>
					{postDataElements}
				</div>
			</div>
	)
}

export default MyPosts;