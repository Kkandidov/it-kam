import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";

const LoginReduxForm = reduxForm(
		{
			form: 'login'
		}
)(LoginForm);

export default LoginReduxForm;