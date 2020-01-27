import React from 'react';
import { shallow } from 'enzyme';
import MovieDetail from './MovieDetail';

describe('<MovieDetail />', () => {
  test('renders', () => {
    const wrapper = shallow(<MovieDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
