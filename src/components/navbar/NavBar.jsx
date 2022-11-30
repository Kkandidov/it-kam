import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
	return (
			<nav className={s.nav}>
				<div className={s.item}>
					<NavLink to='/profile' className={navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/dialogs' className={navData => navData.isActive ? s.activeLink : s.item}>Messages</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/users' className={navData => navData.isActive ? s.activeLink : s.item}>Users</NavLink>
				</div>
				<div className={s.item}>
					<a>News</a>
				</div>
				<div className={s.item}>
					<a>Music</a>
				</div>
				<div className={s.item}>
					<a>Settings</a>
				</div>
			</nav>
	)
}

export default NavBar;