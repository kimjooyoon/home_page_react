import {Meta, StoryObj} from '@storybook/react';

import ButtonAtom from '../../../../../src/components/atoms/button/ButtonAtom';

const meta: Meta<typeof ButtonAtom> = {
  component: ButtonAtom,
};

export default meta;

type Story = StoryObj<typeof ButtonAtom>;

export const Basic: Story = {
  args: {
    children: '확인',
  }
};
