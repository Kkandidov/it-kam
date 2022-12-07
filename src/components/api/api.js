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
		return instance.put(`profile/status`, {status}).then(resp => resp.data);
	}
}

export const authApi = {
	me() {
		return instance.get(`auth/me`).then(resp => resp.data);
	}
}