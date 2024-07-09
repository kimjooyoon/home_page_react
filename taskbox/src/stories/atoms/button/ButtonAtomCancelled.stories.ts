import {Meta, StoryObj} from '@storybook/react';

import {ButtonAtomCancelled} from '../../../../../src/components/atoms/button/ButtonAtom';

const meta: Meta<typeof ButtonAtomCancelled> = {
  component: ButtonAtomCancelled,
};

export default meta;

type Story = StoryObj<typeof ButtonAtomCancelled>;

export const Basic: Story = {
  args: {}
};
