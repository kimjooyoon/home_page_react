import {Meta, StoryObj} from '@storybook/react';

import ToolBarAtom from '../../../../../src/components/atoms/toolbar/ToolBarAtom';

const meta: Meta<typeof ToolBarAtom> = {
  component: ToolBarAtom,
};

export default meta;

type Story = StoryObj<typeof ToolBarAtom>;

export const Basic: Story = {
  args: {
    children: 'test',
  }
};
