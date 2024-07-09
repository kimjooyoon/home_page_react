import {Meta, StoryObj} from '@storybook/react';

import AppBarAtom from '../../../../../src/components/atoms/appbar/AppBarAtom';

const meta: Meta<typeof AppBarAtom> = {
  component: AppBarAtom,
};

export default meta;

type Story = StoryObj<typeof AppBarAtom>;

export const Basic: Story = {
  args: {
  }
};
