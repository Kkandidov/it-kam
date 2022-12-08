import {Field} from "redux-form";
import {Input} from "../common/FormControls";
import {required} from "../utils/Validators";

const LoginForm = (props) => {
	return (
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field placeholder={'Login'}
						   name={'login'}
						   component={Input}
						   validate={[required]}/>
				</div>
				<div>
					<Field placeholder={'Password'}
						   name={'password'}
						   component={Input}
						   type={'password'}
						   validate={[required]}/>
				</div>
				<div>
					<Field component={'input'}
						   name={'rememberMe'}
						   type={'checkbox'}/> remember me
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
	)
}

export default LoginForm;