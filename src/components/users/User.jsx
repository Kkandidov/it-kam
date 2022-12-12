import s from './Users.module.css';
import userPhoto from '../../assets/images/img.png'
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({u, ...props}) => {
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
									? <button disabled={props.followingInProgress.some(id => id === u.id)}
											  onClick={() => props.unFollow(u.id)}>Unfollow</button>
									: <button disabled={props.followingInProgress.some(id => id === u.id)}
											  onClick={() => props.follow(u.id)}>Follow</button>
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
}

export default User;