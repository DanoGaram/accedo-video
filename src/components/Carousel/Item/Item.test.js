import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('<Item />', () => {
  test('renders', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper).toMatchSnapshot();
  });
});
