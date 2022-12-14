import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
	return (
			<header className={s.header}>
				<img src='data:image/png;base64,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'/>

				<div className={s.loginBlock}>
					{props.isAuth
							? <>
								<span>{props.login}</span>
								<button onClick={props.logout}>LOGOUT</button>
								}
							</>
							: <NavLink to={'/login'}>LOGIN</NavLink>}
				</div>
			</header>
	)
}

export default Header;