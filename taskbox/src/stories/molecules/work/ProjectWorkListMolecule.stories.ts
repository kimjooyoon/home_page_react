import {Meta, StoryObj} from '@storybook/react';

import ProjectWorkListMolecule from '../../../../../src/components/molecules/work/ProjectWorkListMolecule';

const meta: Meta<typeof ProjectWorkListMolecule> = {
  component: ProjectWorkListMolecule,
};

export default meta;

type Story = StoryObj<typeof ProjectWorkListMolecule>;


// @ts-ignore
export const Base: Story = {
  args: {}
};
