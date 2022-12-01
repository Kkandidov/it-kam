import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/img.png'
import React from "react";

class Users extends React.Component {
	constructor(props) {
		super(props);
		alert('NEW');

		axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(resp => {
					this.props.setUsers(resp.data.items)
				})
	}

	render() {
		return (
				<div>
					{
						this.props.users.map(u => {
							return (
									<div key={u.id}>
									<span>
										<div>
											<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
										</div>
										<div>
											{
												u.followed
														? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
														: <button onClick={() => this.props.follow(u.id)}>Follow</button>
											}
										</div>
									</span>
										<span>
										<span>
											<div>{u.name}</div>
											<div>{u.status}</div>
										</span>
										<span>
											{/*<div>{u.location.country}</div>*/}
											{/*<div>{u.location.city}</div>*/}
										</span>
									</span>
									</div>
							)
						})
					}
				</div>
		)
	}
}

export default Users;