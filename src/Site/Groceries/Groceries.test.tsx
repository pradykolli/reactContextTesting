import React from 'react';
import { shallow, configure } from 'enzyme';
import * as SiteContext from '../SiteContext';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mockContextValue } from '../TestHelper';
import Groceries from './Groceries';

const adapter = new Adapter();

configure({ adapter });
describe('<Groceries />', () => {
  test('it should mock the context', () => {
    jest
      .spyOn(SiteContext, 'useSiteContext')
      .mockImplementation(() => mockContextValue);
    const wrapper = shallow(<Groceries />);
    const p = wrapper.find('p');

    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').length).not.toBe(2);
    expect(wrapper.find('p').at(0).text()).toBe("Avocado");
  });
});
