import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();

		return <Component {...props} router={{location, navigate, params}}/>
	}

	return ComponentWithRouterProp;
}

let stateToPropsForRedirect = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
}

export function withAuthRedirect(Component) {
	function ComponentWithAuthRedirect(props) {
		if (!props.isAuth) {
			return <Navigate to={'/login'}/>
		}

		return <Component {...props}/>
	}

	return connect(stateToPropsForRedirect)(ComponentWithAuthRedirect);
}
