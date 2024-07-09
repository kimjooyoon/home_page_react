import {Meta, StoryObj} from '@storybook/react';

import {ButtonAtomIcon} from '../../../../../src/components/atoms/button/ButtonAtom';
import {IconAtomSave} from '../../../../../src/components/atoms/icon/IconAtom';

const meta: Meta<typeof ButtonAtomIcon> = {
  component: ButtonAtomIcon,
};

export default meta;

type Story = StoryObj<typeof ButtonAtomIcon>;

export const Save: Story = {
  args: {
    children: '저장',
    startIcon: <IconAtomSave/>
  }
};
