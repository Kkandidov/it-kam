import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "d2bccdd9-433d-4e65-9d46-1c44b5e168bc"
	}
});

export const userApi = {
	getUsers(pageNumber, pageSize) {
		return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
				.then(resp => resp.data);
	},

	follow(userId) {
		return instance.post(`follow/${userId}`)
				.then(resp => resp.data);
	},

	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
				.then(resp => resp.data);
	}
}