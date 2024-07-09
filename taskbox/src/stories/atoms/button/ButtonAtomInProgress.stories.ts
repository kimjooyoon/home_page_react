import {Meta, StoryObj} from '@storybook/react';

import {ButtonAtomInProgress} from '../../../../../src/components/atoms/button/ButtonAtom';

const meta: Meta<typeof ButtonAtomInProgress> = {
  component: ButtonAtomInProgress,
};

export default meta;

type Story = StoryObj<typeof ButtonAtomInProgress>;

export const Basic: Story = {
  args: {}
};
