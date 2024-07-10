import {Meta, StoryObj} from '@storybook/react';

import {TagAtomDesign} from '../../../../../src/components/atoms/tag/SpecificTags';

const meta: Meta<typeof TagAtomDesign> = {
  component: TagAtomDesign,
};

export default meta;

type Story = StoryObj<typeof TagAtomDesign>;

export const Basic: Story = {
  args: {}
};
