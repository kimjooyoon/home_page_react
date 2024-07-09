import {Meta, StoryObj} from '@storybook/react';

import {ButtonAtomCompleted} from '../../../../../src/components/atoms/button/ButtonAtom';

const meta: Meta<typeof ButtonAtomCompleted> = {
  component: ButtonAtomCompleted,
};

export default meta;

type Story = StoryObj<typeof ButtonAtomCompleted>;

export const Basic: Story = {
  args: {}
};
