import type { Meta, StoryObj } from '@storybook/react';
import { XTimeline } from '../x';

const meta = {
  component: XTimeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/XTimeline',
} satisfies Meta<typeof XTimeline>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    height: '300',
    username: 'X',
    width: '300',
  },
};
