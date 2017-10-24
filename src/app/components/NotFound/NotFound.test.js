import React from 'react';
import NotFound from './NotFound';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Get h1 content', () => {
  const wrapper = shallow(
    <NotFound/>
  );
  const expected = wrapper.find('h1').text();
  const result = 'Page not found !';
  expect(expected).toBe(result);
});
