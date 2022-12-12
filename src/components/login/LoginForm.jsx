import {createField, Input} from "../common/FormControls";
import {required} from "../utils/Validators";
import s from './../common/FormControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
	return (
			<form onSubmit={handleSubmit}>
				{createField('Login', 'login', Input, [required])}
				{createField('Password', 'password', Input, [required], {type: 'password'})}
				{createField(null, 'rememberMe', 'input', [], {type: 'checkbox'}, 'remember me')}
				{
						error &&
						<div className={s.formSummaryError}>
							{error}
						</div>
				}
				<div>
					<button>Login</button>
				</div>
			</form>
	)
}

export default LoginForm;