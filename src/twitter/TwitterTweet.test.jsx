import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TwitterTweet from './TwitterTweet';

configure({ adapter: new Adapter() });

describe('Twitter Tweet', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="test-tweet"></div>' +
      '<script></script>';
  });

  it('Should be defined', () => {
    const wrapper = mount(
      <TwitterTweet tweetId='1068002376496275461' />,
      {
        attachTo: document.querySelector('#test-tweet')
      }
    );
    expect(wrapper).toBeDefined();
    wrapper.detach();
  });
});
