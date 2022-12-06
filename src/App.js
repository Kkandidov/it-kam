import './App.css';
import NavBar from "./components/navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import React from "react";
import Login from "./components/login/Login";

const App = () => {
	return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<NavBar/>
				<div className='app-wrapper-content'>
					<Routes>
						<Route path="/profile">
							<Route path="" element={<ProfileContainer/>}/>
							<Route path=":profileId" element={<ProfileContainer/>}/>
						</Route>
						<Route path='/dialogs/*' element={<DialogsContainer/>}/>
						<Route path='/users/*' element={<UsersContainer/>}/>
						<Route path='/login/*' element={<Login/>}/>
					</Routes>
				</div>
			</div>
	);
}

export default App;
