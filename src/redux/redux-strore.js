import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogReducer from "./reducers/dialog-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./reducers/app-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogReducer,
	usersPage: usersReducer,
	sidebar: sidebarReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;