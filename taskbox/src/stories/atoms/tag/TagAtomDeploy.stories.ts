import {Meta, StoryObj} from '@storybook/react';

import {TagAtomDeploy} from '../../../../../src/components/atoms/tag/SpecificTags';

const meta: Meta<typeof TagAtomDeploy> = {
  component: TagAtomDeploy,
};

export default meta;

type Story = StoryObj<typeof TagAtomDeploy>;

export const Basic: Story = {
  args: {}
};
