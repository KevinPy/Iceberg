import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Get h1 content', () => {
  const wrapper = shallow(
    <App/>
  );
  const expected = wrapper.find('h1').text();
  const result = 'Welcome to Iceberg !';
  expect(expected).toBe(result);
});
