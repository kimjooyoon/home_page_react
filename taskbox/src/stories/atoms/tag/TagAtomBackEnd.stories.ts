import {Meta, StoryObj} from '@storybook/react';

import {TagAtomBackEnd} from '../../../../../src/components/atoms/tag/SpecificTags';

const meta: Meta<typeof TagAtomBackEnd> = {
  component: TagAtomBackEnd,
};

export default meta;

type Story = StoryObj<typeof TagAtomBackEnd>;

export const Basic: Story = {
  args: {}
};
