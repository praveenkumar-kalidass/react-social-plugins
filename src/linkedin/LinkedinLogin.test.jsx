import React from 'react';
import sinon from 'sinon';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkedinLogin from './LinkedinLogin';

configure({ adapter: new Adapter() });

describe('Linkedin Company Profile', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="test-login"></div>';
  });

  it('Should be defined', () => {
    const wrapper = mount(
      <LinkedinLogin
        apiKey="78reka6gey2jsx"
        authorize
        lang="en_US"
        onError={window.alert}
        onSuccess={window.alert}
      />,
      {
        attachTo: document.querySelector('#test-login')
      }
    );
    expect(wrapper).toBeDefined();
    wrapper.detach();
  });

  it('Component Did Mount', () => {
    sinon.spy(LinkedinLogin.prototype, 'componentDidMount');
    const wrapper = mount(
      <LinkedinLogin
        apiKey="78reka6gey2jsx"
        authorize
        lang="en_US"
        onError={window.alert}
        onSuccess={window.alert}
      />,
      {
        attachTo: document.querySelector('#test-login')
      }
    );
    expect(LinkedinLogin.prototype.componentDidMount.callCount).toBe(1);
    wrapper.detach();
  });
});
