import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../app/index';

configure({ adapter: new Adapter() });

test('Jest-React-TypeScript 尝试运行', () => {
  const renderer = shallow(<App></App>);
  expect(renderer.text()).toEqual('hello world'); // Pass
});
