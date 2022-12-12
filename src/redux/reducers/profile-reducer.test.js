import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";

let state = {
	postData: [
		{id: 1, message: 'Hi, how are you?', likeCount: 12},
		{id: 2, message: 'It is my firs post.', likeCount: 11},
		{id: 3, message: 'It is my firs post1.', likeCount: 13}
	]
};

it('length of posts should be incremented', () => {
	let addPostAC = addPostActionCreator('it-kamasutra.com');
	let newState = profileReducer(state, addPostAC);

	expect(newState.postData.length).toBe(4);
})

it('length of posts should be incremented', () => {
	let addPostAC = addPostActionCreator('it-kamasutra.com');
	let newState = profileReducer(state, addPostAC);

	expect(newState.postData[3].message).toBe('it-kamasutra.com');
})