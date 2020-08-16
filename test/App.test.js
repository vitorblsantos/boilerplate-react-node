import React from 'react';
import {
	create,
} from 'react-test-renderer';
import {
	mount,
} from 'enzyme';

import App from '../client/src/App';
import Hello from '../client/src/components/hello';


describe('App', () => {
	test('Snapshot render', () =>{
		const component = create(<App />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	}),
	it('Render', () => {
		const wrapper = mount(<App />);
		expect(wrapper.find(Hello).length).toEqual(1);
	});
});