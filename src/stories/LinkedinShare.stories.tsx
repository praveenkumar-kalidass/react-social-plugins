import type { Meta, StoryObj } from '@storybook/react';
import { LinkedinShare } from '../linkedin';

const meta = {
  component: LinkedinShare,
  parameters: {
    layout: 'centered',
  },
  title: 'Example/LinkedInShare',
} satisfies Meta<typeof LinkedinShare>;

export default meta;

export const Example: StoryObj<typeof meta> = {
  args: {
    lang: 'en_US',
    url: 'https://www.linkedin.com',
  },
};
