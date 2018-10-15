import React from 'react';
import sinon from 'sinon';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkedinFollowCompany from './LinkedinFollowCompany';

configure({ adapter: new Adapter() });

describe('Linkedin Company Profile', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="test-follow-company"></div>';
  });

  it('Should be defined', () => {
    const wrapper = mount(
      <LinkedinFollowCompany
        companyId={2414183}
        lang="en_US"
      />,
      {
        attachTo: document.querySelector('#test-follow-company')
      }
    );
    expect(wrapper).toBeDefined();
    wrapper.detach();
  });

  it('Component Did Mount', () => {
    sinon.spy(LinkedinFollowCompany.prototype, 'componentDidMount');
    const wrapper = mount(
      <LinkedinFollowCompany
        companyId={2414183}
        lang="en_US"
      />,
      {
        attachTo: document.querySelector('#test-follow-company')
      }
    );
    expect(LinkedinFollowCompany.prototype.componentDidMount.callCount).toBe(1);
    wrapper.detach();
  });
});
