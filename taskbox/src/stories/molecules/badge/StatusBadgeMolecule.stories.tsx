import {Meta, StoryObj} from '@storybook/react';

import StatusBadgeMolecule from '../../../../../src/components/molecules/badge/StatusBadgeMolecule';

const meta: Meta<typeof StatusBadgeMolecule> = {
  component: StatusBadgeMolecule,
};

export default meta;

type Story = StoryObj<typeof StatusBadgeMolecule>;

export const InProgress: Story = {
  args: {
    status: '진행중'
  }
};
