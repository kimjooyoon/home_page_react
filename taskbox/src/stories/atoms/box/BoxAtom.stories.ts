import {Meta, StoryObj} from '@storybook/react';

import BoxAtom from '../../../../../src/components/atoms/box/BoxAtom';

const meta: Meta<typeof BoxAtom> = {
  component: BoxAtom,
};

export default meta;

type Story = StoryObj<typeof BoxAtom>;

export const Basic: Story = {
  args: {
    children: '확인',
  }
};
