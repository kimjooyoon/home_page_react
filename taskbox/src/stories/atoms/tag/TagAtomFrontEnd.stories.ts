import {Meta, StoryObj} from '@storybook/react';

import {TagAtomFrontEnd} from '../../../../../src/components/atoms/tag/SpecificTags';

const meta: Meta<typeof TagAtomFrontEnd> = {
  component: TagAtomFrontEnd,
};

export default meta;

type Story = StoryObj<typeof TagAtomFrontEnd>;

export const Basic: Story = {
  args: {}
};
