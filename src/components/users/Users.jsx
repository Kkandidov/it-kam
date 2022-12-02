import s from './Users.module.css';
import userPhoto from '../../assets/images/img.png'
import React from "react";
import axios from "axios";

class Users extends React.Component {

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users` +
				`?page=${pageNumber}&count=${this.props.pageSize}`)
				.then(resp => {
					this.props.setUsers(resp.data.items)
				})
	};

	render() {
		let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}

		return (
				<div>
					{
						pages.map(p => <span
								className={p === this.props.currentPage && s.selectedPageNumber}
								onClick={() => this.onPageChanged(p)}>{p}</span>)
					}
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
		axios.get(`https://social-network.samuraijs.com/api/1.0/users` +
				`?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then(resp => {
					this.props.setUsers(resp.data.items)
					this.props.setTotalUserCount(resp.data.totalCount)
				})
	}
}

export default Users;