import s from './Users.module.css';
import userPhoto from '../../assets/images/img.png'
import React from "react";
import axios from "axios";

class Users extends React.Component {

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

	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(resp => {
					this.props.setUsers(resp.data.items)
				})
	}
}

export default Users;