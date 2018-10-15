import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkedinAddProfile from './LinkedinAddProfile';

configure({ adapter: new Adapter() });

describe('Linkedin Add to Profile', () => {
  it('Should be defined', () => {
    const wrapper = mount(<LinkedinAddProfile />);
    expect(wrapper).toBeDefined();
  });
});
