import s from './FormControls.module.css'

const FormControl = ({meta, ...props}) => {
	const hasError = meta.touched && meta.error;

	return (
			<div className={s.formControl + " " + (hasError ? s.error : '')}>
				<div>
					{props.children}
				</div>
				{
						hasError && <span>{meta.error}</span>
				}
			</div>
	)
}

export let Textarea = (props) => {
	const {input, meta, placeholder, ...restProps} = props;
	return (
			<FormControl {...props}>
				<textarea placeholder={placeholder} {...input} {...restProps}/>
			</FormControl>
	)
}

export let Input = (props) => {
	const {input, meta, placeholder, ...restProps} = props;
	return (
			<FormControl {...props}>
				<input placeholder={placeholder} {...input} {...restProps}/>
			</FormControl>
	)
}