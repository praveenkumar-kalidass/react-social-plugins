import type { Meta, StoryObj } from '@storybook/react';
import { XTweet } from '../x';

const meta = {
  component: XTweet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/XTweet',
} satisfies Meta<typeof XTweet>;

export default meta;

export const Example: StoryObj<typeof meta> = {
  args: {
    align: 'center',
    cards: 'hidden',
    conversation: 'none',
    id: '20',
    lang: 'in_ID',
    theme: 'dark',
    username: 'jack',
    width: '400',
  },
};
