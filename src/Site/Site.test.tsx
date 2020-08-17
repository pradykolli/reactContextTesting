import React from 'react';
import { shallow, configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Site from './Site';

const adapter = new Adapter();

configure({ adapter });
describe('<Site />', () => {
  test('it should shallow render', () => {
    const wrapper = shallow(<Site />);
    expect(wrapper.find('Cart').exists()).toBeTruthy();
    expect(wrapper.find('Electronics').exists()).toBeTruthy();
    expect(wrapper.find('Groceries').exists()).toBeTruthy();
    expect(wrapper.find('Apparel').exists()).toBeTruthy();
  });
});
