import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {getUsers} from "../api/api";

class UsersAPIComponent extends React.Component {
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		getUsers(pageNumber, this.props.pageSize)
				.then(data => {
					this.props.toggleIsFetching(false);
					this.props.setUsers(data.items);
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
		getUsers(this.props.currentPage, this.props.pageSize)
				.then(data => {
					this.props.toggleIsFetching(false)
					this.props.setUsers(data.items)
					this.props.setTotalUserCount(data.totalCount)
				})
	}

	render() {
		return (<>
					{this.props.isFetching ? <Preloader/> : null}
					<Users pages={this.getPages()}
						   currentPage={this.props.currentPage}
						   onPageChanged={this.onPageChanged}
						   users={this.props.users}
						   unFollow={this.props.unFollow}
						   follow={this.props.follow}/>
				</>
		)
	}
}

export default UsersAPIComponent;