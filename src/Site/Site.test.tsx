import React from 'react';
import { shallow, configure } from 'enzyme';
import * as SiteContext from './SiteContext';
import Apparel from './Apparel/Apparel';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();

configure({ adapter });

const mockValue:SiteContext.IcontextValue = {
    Cart:[],
    Electronics: ["Apple","Samsung","Sony"],
    Apparel: ["UA", "Nike", "Adidas"],
    Groceries: [],
    addToCart: jest.fn(),
    deleteFromCart: jest.fn()
}
describe('<Hello />', () => {
  test('it should mock the context', () => {
    jest
      .spyOn(SiteContext, 'useSiteContext')
      .mockImplementation(() => mockValue);
    const wrapper = shallow(<Apparel />);
    const p = wrapper.find('p');

    expect(wrapper.find('p').length).toBe(3);
    expect(wrapper.find('p').length).not.toBe(2);
    expect(wrapper.find('p').at(0).text()).toBe("UA");
  });
});
