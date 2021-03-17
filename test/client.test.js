import React from 'react';
import { mount } from 'enzyme';

import App from '../client/src/App';
import Hello from '../client/src/components/hello';


describe('Start Client', () => {
  it('Render Client', done => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Hello).length).toEqual(1);
    done();
  });
});
