import type { Meta, StoryObj } from '@storybook/react';
import { LinkedinFollowCompany } from '../linkedin';

const meta = {
  component: LinkedinFollowCompany,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/LinkedInFollowCompany',
} satisfies Meta<typeof LinkedinFollowCompany>;

export default meta;

export const Example: StoryObj<typeof meta> = {
  args: {
    counter: 'bottom',
    id: '2414183',
    lang: 'hi_IN',
  },
}; 