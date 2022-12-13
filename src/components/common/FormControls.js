import s from './FormControls.module.css'
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
	const hasError = touched && error;

	return (
			<div className={s.formControl + " " + (hasError ? s.error : '')}>
				<div>
					{children}
				</div>
				{hasError && <span>{error}</span>}
			</div>
	)
}

export let Textarea = (props) => {
	const {input, ...restProps} = props;
	return (
			<FormControl {...props}>
				<textarea {...input} {...restProps}/>
			</FormControl>
	)
}

export let Input = (props) => {
	const {input, ...restProps} = props;
	return (
			<FormControl {...props}>
				<input {...input} {...restProps}/>
			</FormControl>
	)
}

export let createField = (placeholder, name, component, validate, props = {}, text = '') => {
	return (
			<div>
				<Field placeholder={placeholder}
					   name={name}
					   component={component}
					   validate={validate}
					   {...props}/>
				{text}
			</div>
	)
}