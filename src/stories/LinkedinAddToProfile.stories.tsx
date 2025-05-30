import type { Meta, StoryObj } from '@storybook/react';
import { LinkedinAddToProfile } from '../linkedin';

const meta = {
  component: LinkedinAddToProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/LinkedInAddToProfile',
} satisfies Meta<typeof LinkedinAddToProfile>;

export default meta;

export const Example: StoryObj<typeof meta> = {
  args: {
    fields: {
      startTask: 'CERTIFICATION_NAME',
    },
    lang: 'in_ID',
  },
}; 