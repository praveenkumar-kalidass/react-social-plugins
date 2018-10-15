import React from 'react';
import sinon from 'sinon';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkedinCompanyProfile from './LinkedinCompanyProfile';

configure({ adapter: new Adapter() });

describe('Linkedin Company Profile', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="test-company-profile"></div>';
  });

  it('Should be defined', () => {
    const wrapper = mount(
      <LinkedinCompanyProfile
        lang="en_US"
        companyId={2414183}
        format="inline"
        text="Praveenkumar K"
      />,
      {
        attachTo: document.querySelector('#test-company-profile')
      }
    );
    expect(wrapper).toBeDefined();
    wrapper.detach();
  });

  it('Component Did Mount', () => {
    sinon.spy(LinkedinCompanyProfile.prototype, 'componentDidMount');
    const wrapper = mount(
      <LinkedinCompanyProfile
        lang="en_US"
        companyId={2414183}
        format="inline"
        text="Praveenkumar K"
      />,
      {
        attachTo: document.querySelector('#test-company-profile')
      }
    );
    expect(LinkedinCompanyProfile.prototype.componentDidMount.callCount)
      .toBe(1);
    wrapper.detach();
  });
});
