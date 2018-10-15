import React from 'react';
import sinon from 'sinon';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkedinShare from './LinkedinShare';

configure({ adapter: new Adapter() });

describe('Linkedin Company Profile', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="test-share"></div>';
  });

  it('Should be defined', () => {
    const wrapper = mount(
      <LinkedinShare
        apiKey="78reka6gey2jsx"
        authorize
        lang="en_US"
      />,
      {
        attachTo: document.querySelector('#test-share')
      }
    );
    expect(wrapper).toBeDefined();
    wrapper.detach();
  });

  it('Component Did Mount', () => {
    sinon.spy(LinkedinShare.prototype, 'componentDidMount');
    const wrapper = mount(
      <LinkedinShare
        apiKey="78reka6gey2jsx"
        authorize
        lang="en_US"
      />,
      {
        attachTo: document.querySelector('#test-share')
      }
    );
    expect(LinkedinShare.prototype.componentDidMount.callCount).toBe(1);
    wrapper.detach();
  });
});
