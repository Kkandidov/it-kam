import LoginReduxForm from "./LoginReduxForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.login, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to={'/profile'}/>
	}

	return (
			<div>
				<h1>Login</h1>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
	)
}

let mapPropsToState = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
}

export default connect(mapPropsToState, {login})(Login);