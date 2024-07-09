import {Meta, StoryObj} from '@storybook/react';

import NavigationBarMolecule from '../../../../../src/components/molecules/navigationbar/NavigationBarMolecule';

const meta: Meta<typeof NavigationBarMolecule> = {
  component: NavigationBarMolecule,
};

export default meta;

type Story = StoryObj<typeof NavigationBarMolecule>;

export const Basic: Story = {
  args: {}
};
