import s from './MyPosts.module.css'
import Post from "./post/Post";
import React from "react";

const MyPosts = (props) => {

	let postDataElements = props.postData.map(p =>
			<Post message={p.message} likeCount={p.likeCount}/>
	);

	let newPostElement = React.createRef();

	let onAddPost = () => (props.addPost());

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPost(text);
	}

	return (
			<div className={s.postsBlock}>
				<h3>My posts</h3>
				<div>
					<textarea ref={newPostElement}
							  onChange={onPostChange}
							  value={props.newPost}></textarea>
					<div>
						<button onClick={onAddPost}>Add post</button>
					</div>
					<div>
						<button>Remove</button>
					</div>
				</div>
				<div className={s.posts}>
					{postDataElements}
				</div>
			</div>
	)
}

export default MyPosts;