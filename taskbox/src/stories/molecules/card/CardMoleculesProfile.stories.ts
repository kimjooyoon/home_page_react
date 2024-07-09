import {Meta, StoryObj} from '@storybook/react';

import {CardMoleculeProfile} from '../../../../../src/components/molecules/card/CardMoleculeProfile';

const meta: Meta<typeof CardMoleculeProfile> = {
  component: CardMoleculeProfile,
};

export default meta;

type Story = StoryObj<typeof CardMoleculeProfile>;

export const Basic: Story = {
  args: {
    title: 'Profile',
    name: 'Teddy Kim',
    email: 'asketeddy@gmail.com',
    company: 'stargaser',
    phone: '010-2851-3738',
    position: 'front-end',
    description: 'develop react, flutter.'
  }
};
