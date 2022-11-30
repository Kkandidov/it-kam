import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {
	return (
			<BrowserRouter>
				<div className='app-wrapper'>
					<Header/>
					<NavBar/>
					<div className='app-wrapper-content'>
						<Routes>
							<Route path='/profile' element={<Profile/>}/>
							<Route path='/dialogs' element={<DialogsContainer/>}/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
	);
}

export default App;
