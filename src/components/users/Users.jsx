import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/img.png'

let User = (props) => {
	let user = props.user;
	return (
			<div key={user.id}>
				<span>
					<div>
						<img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}/>
					</div>
					<div>
						{
							user.followed
									? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
									: <button onClick={() => props.follow(user.id)}>Follow</button>
						}

					</div>
				</span>
				<span>
					<span>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</span>
					<span>
						{/*<div>{user.location.country}</div>*/}
						{/*<div>{user.location.city}</div>*/}
					</span>
				</span>
			</div>
	)
}

const Users = (props) => {
	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
					.then(resp => {
						props.setUsers(resp.data.items)
					})
		}
	}

	return (
			<div>
				<button onClick={getUsers}>Get Users</button>
				{
					props.users.map(u => <User user={u} follow={props.follow} unfollow={props.unFollow}/>)
				}
			</div>
	)
}

export default Users;