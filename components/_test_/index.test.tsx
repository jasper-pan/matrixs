import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Button from '../button/index';

configure({ adapter: new Adapter() });

test('Jest-React-TypeScript 尝试运行', () => {
  const renderer = shallow(<Button/>);
  expect(renderer.text()).toEqual('hello world'); // Pass
});
