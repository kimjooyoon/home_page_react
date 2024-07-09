import {Meta, StoryObj} from '@storybook/react';

import {AppBarAtomFixed} from '../../../../../src/components/atoms/appbar/AppBarAtom';

const meta: Meta<typeof AppBarAtomFixed> = {
  component: AppBarAtomFixed,
};

export default meta;

type Story = StoryObj<typeof AppBarAtomFixed>;

export const Basic: Story = {
  args: {
  }
};
