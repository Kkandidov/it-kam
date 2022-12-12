import {render, screen} from '@testing-library/react';
import SamurajJSApp from './App';

test('renders learn react link', () => {
	render(<SamurajJSApp/>);
	const linkElement = screen.getByText("Settings");
	expect(linkElement).toBeInTheDocument();
});
