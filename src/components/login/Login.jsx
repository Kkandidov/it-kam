import LoginReduxForm from "./LoginReduxForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
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
				<LoginReduxForm onSubmit={onSubmit}
								captchaUrl={props.captchaUrl}/>
			</div>
	)
}

let mapPropsToState = (state) => {
	return {
		captchaUrl: state.auth.captchaUrl,
		isAuth: state.auth.isAuth
	};
}

export default connect(mapPropsToState, {login})(Login);