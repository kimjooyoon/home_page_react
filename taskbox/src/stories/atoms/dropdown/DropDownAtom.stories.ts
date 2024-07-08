import {Meta, StoryObj} from '@storybook/react';

import DropDown from '../../../../../src/components/atoms/dropdown/DropDownAtom';

const meta: Meta<typeof DropDown> = {
  component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

export const Basic: Story = {
  args: {
  }
};
