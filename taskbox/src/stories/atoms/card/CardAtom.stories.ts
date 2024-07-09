import {Meta, StoryObj} from '@storybook/react';

import CardAtom from '../../../../../src/components/atoms/card/CardAtom';

const meta: Meta<typeof CardAtom> = {
  component: CardAtom,
};

export default meta;

type Story = StoryObj<typeof CardAtom>;

export const Basic: Story = {
  args: {
    children: '확인',
  }
};
