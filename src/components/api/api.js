import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "da2d1705-a634-4820-a7a5-6c73af74f8df"
	}
});

export const userApi = {
	getUsers(pageNumber, pageSize) {
		return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(resp => resp.data);
	},

	follow(userId) {
		return instance.post(`follow/${userId}`).then(resp => resp.data);
	},

	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(resp => resp.data);
	},

	getProfile(profileId) {
		console.warn('Obsolete method. Please use profileApi.getProfile');
		return profileApi.getProfile(profileId);
	}
}

export const profileApi = {
	getProfile(profileId) {
		return instance.get(`profile/${profileId}`).then(resp => resp.data);
	},

	getUserStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(resp => resp.data);
	},

	updateUserStatus(status) {
		return instance.put(`profile/status`, {status: status}).then(resp => resp.data);
	}
}

export const authApi = {
	me() {
		return instance.get(`auth/me`).then(resp => resp.data);
	},

	login(email, password, rememberMe) {
		return instance.post(`auth/login`,
				{
					email: email,
					password: password,
					rememberMe: rememberMe
				})
				.then(resp => resp.data);
	},

	logout() {
		return instance.delete(`auth/login`)
				.then(resp => resp.data);
	}
}