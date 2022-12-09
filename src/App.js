import './App.css';
import NavBar from "./components/navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import React from "react";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {appInitialized} from "./redux/reducers/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends React.Component {
	componentDidMount() {
		this.props.appInitialized();
	}

	render() {
		if (!this.props.initializedApp) {
			return <div><Preloader/></div>
		}

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
}

let matStateToProps = (state) => {
	return {
		initializedApp: state.app.initializedApp
	}
}

export default connect(matStateToProps, {appInitialized})(App);
