import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "0e20de8b-a938-40f7-bc32-e4ca295cd6f5"
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
	},

	savePhoto(file) {
		let formData = new FormData();
		formData.append("image", file);
		return instance.put(`/profile/photo`,
				formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
				.then(resp => resp.data);
	},

	saveProfile(profile) {
		return instance.put(`/profile`, profile)
				.then(resp => resp.data);
	}

}

export const authApi = {
	me() {
		return instance.get(`auth/me`).then(resp => resp.data);
	},

	login(email, password, rememberMe, captcha) {
		return instance.post(`auth/login`,
				{
					email: email,
					password: password,
					rememberMe: rememberMe,
					captcha: captcha
				})
				.then(resp => resp.data);
	},

	logout() {
		return instance.delete(`auth/login`)
				.then(resp => resp.data);
	}
}

export const securityApi = {
	getCaptcha() {
		return instance.get(`security/get-captcha-url`)
				.then(resp => resp.data);
	}
}