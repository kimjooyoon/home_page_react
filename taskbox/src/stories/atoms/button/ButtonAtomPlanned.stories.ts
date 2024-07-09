import {Meta, StoryObj} from '@storybook/react';

import {ButtonAtomPlanned} from '../../../../../src/components/atoms/button/ButtonAtom';

const meta: Meta<typeof ButtonAtomPlanned> = {
  component: ButtonAtomPlanned,
};

export default meta;

type Story = StoryObj<typeof ButtonAtomPlanned>;

export const Basic: Story = {
  args: {}
};
