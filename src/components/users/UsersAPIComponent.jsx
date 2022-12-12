import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component {
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize);
	};

	componentDidMount() {
		const {currentPage, pageSize} = this.props;
		this.props.getUsers(currentPage, pageSize);
	}

	render() {
		return (<>
					{this.props.isFetching ? <Preloader/> : null}
					<Users currentPage={this.props.currentPage}
						   onPageChanged={this.onPageChanged}
						   users={this.props.users}
						   unFollowSuccess={this.props.unFollowSuccess}
						   followSuccess={this.props.followSuccess}
						   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
						   followingInProgress={this.props.followingInProgress}
						   follow={this.props.follow}
						   unFollow={this.props.unFollow}
						   pageSize={this.props.pageSize}
						   totalUserCount={this.props.totalUserCount}/>
				</>
		)
	}
}

export default UsersAPIComponent;