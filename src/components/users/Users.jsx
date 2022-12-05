import s from './Users.module.css';
import userPhoto from '../../assets/images/img.png'
import React from "react";
import {NavLink} from "react-router-dom";

const Users = (props) => {
	return (
			<div>
				{
					props.pages.map(p => <span
							className={p === props.currentPage && s.selectedPageNumber}
							onClick={() => props.onPageChanged(p)}>{p}</span>)
				}
				{
					props.users.map(u => {
						return (
								<div key={u.id}>
									<span>
										<div>
											<NavLink to={'/profile/' + u.id}>
												<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
											</NavLink>
										</div>
										<div>
											{
												u.followed
														? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
														: <button onClick={() => props.follow(u.id)}>Follow</button>
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

export default Users;