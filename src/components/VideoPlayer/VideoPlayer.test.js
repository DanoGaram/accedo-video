import React from 'react';
import { shallow } from 'enzyme';
import VideoPlayer from './VideoPlayer';

describe('<VideoPlayer />', () => {
  test('renders', () => {
    const wrapper = shallow(<VideoPlayer />);
    expect(wrapper).toMatchSnapshot();
  });
});
