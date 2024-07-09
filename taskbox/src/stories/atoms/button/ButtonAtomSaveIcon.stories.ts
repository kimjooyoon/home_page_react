import {Meta, StoryObj} from '@storybook/react';

import {ButtonAtomSaveIcon} from '../../../../../src/components/atoms/button/ButtonAtom';

const meta: Meta<typeof ButtonAtomSaveIcon> = {
  component: ButtonAtomSaveIcon,
};

export default meta;

type Story = StoryObj<typeof ButtonAtomSaveIcon>;

export const Basic: Story = {
  args: {
    children: '확인',
  }
};
