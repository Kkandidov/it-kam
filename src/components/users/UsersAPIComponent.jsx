import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component {

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize);
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
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	render() {
		return (<>
					{this.props.isFetching ? <Preloader/> : null}
					<Users pages={this.getPages()}
						   currentPage={this.props.currentPage}
						   onPageChanged={this.onPageChanged}
						   users={this.props.users}
						   unFollowSuccess={this.props.unFollowSuccess}
						   followSuccess={this.props.followSuccess}
						   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
						   followingInProgress={this.props.followingInProgress}
						   follow={this.props.follow}
						   unFollow={this.props.unFollow}/>
				</>
		)
	}
}

export default UsersAPIComponent;