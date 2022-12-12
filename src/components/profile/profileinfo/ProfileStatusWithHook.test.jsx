import TestRenderer from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
	test("status from props should be in the state", () => {
		const testRenderer = TestRenderer.create(<ProfileStatus status={'it=kam'}/>);
		const testInstance = testRenderer.getInstance();
		expect(testInstance.state.status).toBe('it=kam')
	});

	test("status from props should be in the span", () => {
		const testRenderer = TestRenderer.create(<ProfileStatus status={'it=kam'}/>);
		const root = testRenderer.root
		const span = root.findByType('span')
		expect(span.children[0]).toBe('it=kam')
	});

	test("after creation input shouldn't be", () => {
		const testRenderer = TestRenderer.create(<ProfileStatus status={'it=kam'}/>);
		const root = testRenderer.root

		expect(() => {
			root.findByType('input');
		}).toThrow();
	});

	test("input should be displayed in editMode", () => {
		const testRenderer = TestRenderer.create(<ProfileStatus status={'it=kam'}/>);
		const root = testRenderer.root
		const span = root.findByType('span')
		span.props.onDoubleClick()
		expect(root.findByType('input').props.value).toBe('it=kam')
	});

	test("callback should be called", () => {
		const mockCallBack = jest.fn()
		const testRenderer = TestRenderer.create(<ProfileStatus status={'stat'} updateStatus={mockCallBack}/>);
		const testInstance = testRenderer.getInstance();
		testInstance.deActivateEditMode();
		expect(mockCallBack.mock.calls.length).toBe(1);
	});
});