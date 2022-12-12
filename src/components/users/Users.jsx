import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = (props) => {
	return (
			<div>
				<Paginator currentPage={props.currentPage}
						   onPageChanged={props.onPageChanged}
						   totalUserCount={props.totalUserCount}
						   pageSize={props.pageSize}/>
				{
					props.users.map(u => <User u={u} {...props}/>)
				}
			</div>
	)
}

export default Users;