import React from 'react';
import App from '../../src/js/components/App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Get h1 content', () => {
  const wrapper = shallow(
    <App/>
  );
  const expected = wrapper.find('h1').text();
  const result = 'It\'s Works !';
  expect(expected).toBe(result);
});
