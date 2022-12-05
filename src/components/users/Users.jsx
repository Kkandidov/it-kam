import s from './Users.module.css';
import userPhoto from '../../assets/images/img.png'
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
														? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
															props.toggleFollowingInProgress(true, u.id)
															axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id,
																	{
																		withCredentials: true,
																		headers: {
																			"API-KEY": "d2bccdd9-433d-4e65-9d46-1c44b5e168bc"
																		}
																	})
																	.then(resp => {
																		if (resp.data.resultCode === 0) {
																			props.unFollow(u.id);
																		}
																		props.toggleFollowingInProgress(false, u.id)
																	})
														}}>Unfollow</button>
														: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
															props.toggleFollowingInProgress(true, u.id)
															axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {},
																	{
																		withCredentials: true,
																		headers: {
																			"API-KEY": "d2bccdd9-433d-4e65-9d46-1c44b5e168bc"
																		}
																	})
																	.then(resp => {
																		if (resp.data.resultCode === 0) {
																			props.follow(u.id);
																		}
																		props.toggleFollowingInProgress(false, u.id)
																	})
														}}>Follow</button>
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