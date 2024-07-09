import {Meta, StoryObj} from '@storybook/react';

import {IconAtomSave} from '../../../../../src/components/atoms/icon/IconAtom';

const meta: Meta<typeof IconAtomSave> = {
  component: IconAtomSave,
};

export default meta;

type Story = StoryObj<typeof IconAtomSave>;

export const Basic: Story = {
  args: {}
};
