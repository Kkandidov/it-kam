import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users` +
				`?page=${pageNumber}&count=${this.props.pageSize}`)
				.then(resp => {
					this.props.setUsers(resp.data.items)
				})
	};

	getPages() {
		let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}

		return pages;
	}

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users` +
				`?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then(resp => {
					this.props.setUsers(resp.data.items)
					this.props.setTotalUserCount(resp.data.totalCount)
				})
	}

	render() {
		return <Users pages={this.getPages()}
					  currentPage={this.props.currentPage}
					  onPageChanged={this.onPageChanged}
					  users={this.props.users}
					  unFollow={this.props.unFollow}
					  follow={this.props.follow}/>
	}
}

export default UsersAPIComponent;