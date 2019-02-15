import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TwitterButton from './TwitterButton';

configure({ adapter: new Adapter() });

describe('Twitter Button', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="test-tweet-button"></div>' +
      '<script></script>';
  });

  it('Should be defined', () => {
    const wrapper = mount(
      <TwitterButton
        target="/"
        text="Hello World"
        type="Share"
      />,
      {
        attachTo: document.querySelector('#test-tweet-button')
      }
    );
    expect(wrapper).toBeDefined();
    wrapper.detach();
  });
});
