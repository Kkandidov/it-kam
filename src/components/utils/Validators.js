export let required = (value) => {
	if (value) return undefined;
	return 'field is required'
}

export let lengthCreator = (length) => {
	return (value) => {
		if (value && value.length > length) return `length more than ${length}`;
		return undefined;
	}
}