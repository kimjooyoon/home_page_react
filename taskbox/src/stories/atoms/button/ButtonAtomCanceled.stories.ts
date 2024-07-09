import {Meta, StoryObj} from '@storybook/react';

import {ButtonAtomCanceled} from '../../../../../src/components/atoms/button/ButtonAtom';

const meta: Meta<typeof ButtonAtomCanceled> = {
  component: ButtonAtomCanceled,
};

export default meta;

type Story = StoryObj<typeof ButtonAtomCanceled>;

export const Basic: Story = {
  args: {}
};
