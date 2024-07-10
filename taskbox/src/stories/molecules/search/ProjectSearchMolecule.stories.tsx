import {Meta, StoryObj} from '@storybook/react';

import ProjectSearchMolecule from '../../../../../src/components/molecules/search/ProjectSearchMolecule';

const meta: Meta<typeof ProjectSearchMolecule> = {
  component: ProjectSearchMolecule,
};

export default meta;

type Story = StoryObj<typeof ProjectSearchMolecule>;

export const Basic: Story = {
  args: {}
};
