import React from 'react';
import sinon from 'sinon';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkedinProfile from './LinkedinProfile';

configure({ adapter: new Adapter() });

describe('Linkedin Profile', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="test-profile"></div>';
  });

  it('Should be defined', () => {
    const wrapper = mount(
      <LinkedinProfile
        lang="en_US"
        profileUrl="http://www.linkedin.com/in/praveenkumar-outlook"
        format="inline"
        text="Praveenkumar K"
      />,
      {
        attachTo: document.querySelector('#test-profile')
      }
    );
    expect(wrapper).toBeDefined();
    wrapper.detach();
  });

  it('Component Did Mount', () => {
    sinon.spy(LinkedinProfile.prototype, 'componentDidMount');
    const wrapper = mount(
      <LinkedinProfile
        lang="en_US"
        profileUrl="http://www.linkedin.com/in/praveenkumar-outlook"
        format="inline"
        text="Praveenkumar K"
      />,
      {
        attachTo: document.querySelector('#test-profile')
      }
    );
    expect(LinkedinProfile.prototype.componentDidMount.callCount).toBe(1);
    wrapper.detach();
  });
});
