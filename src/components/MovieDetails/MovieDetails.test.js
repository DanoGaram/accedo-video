import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from './MovieDetails';

describe('<MovieDetails />', () => {
  test('renders', () => {
    const wrapper = shallow(<MovieDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
