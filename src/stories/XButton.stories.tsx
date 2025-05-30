import type { Meta, StoryObj } from '@storybook/react';
import { XButton } from '../x';

const meta = {
  component: XButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/XButton',
} satisfies Meta<typeof XButton>;

export default meta;

export const Share: StoryObj<typeof meta> = {
  args: {
    hashtags: ['react', 'opensource'],
    lang: 'en_US',
    screenName: 'X',
    showCount: true,
    size: 'large',
    text: 'Check out this awesome library!',
    type: 'share',
    url: 'https://github.com/praveenkumar-kalidass/react-social-plugins',
    via: 'X',
  },
};

export const Follow: StoryObj<typeof meta> = {
  args: {
    lang: 'en_US',
    screenName: 'X',
    showCount: true,
    showScreenName: true,
    size: 'large',
    text: 'Follow us',
    type: 'follow',
    url: 'https://twitter.com/X',
    via: 'X',
  },
};

export const Mention: StoryObj<typeof meta> = {
  args: {
    lang: 'en_US',
    screenName: 'X',
    size: 'large',
    text: 'Hey @X, your library is awesome!',
    type: 'mention',
    url: 'https://twitter.com/X',
    via: 'X',
  },
};

export const Hashtag: StoryObj<typeof meta> = {
  args: {
    hashtags: ['reactjs'],
    lang: 'en_US',
    screenName: 'X',
    size: 'large',
    text: 'Love building with React!',
    type: 'hashtag',
    url: 'https://twitter.com/X',
    via: 'X',
  },
}; 