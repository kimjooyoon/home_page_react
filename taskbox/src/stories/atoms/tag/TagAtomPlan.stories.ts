import {Meta, StoryObj} from '@storybook/react';

import {TagAtomPlan} from '../../../../../src/components/atoms/tag/SpecificTags';

const meta: Meta<typeof TagAtomPlan> = {
  component: TagAtomPlan,
};

export default meta;

type Story = StoryObj<typeof TagAtomPlan>;

export const Basic: Story = {
  args: {}
};
