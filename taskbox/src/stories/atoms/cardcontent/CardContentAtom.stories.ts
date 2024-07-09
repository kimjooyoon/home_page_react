import {Meta, StoryObj} from '@storybook/react';

import CardContentAtom from '../../../../../src/components/atoms/cardcontent/CardContentAtom';

const meta: Meta<typeof CardContentAtom> = {
  component: CardContentAtom,
};

export default meta;

type Story = StoryObj<typeof CardContentAtom>;

export const Basic: Story = {
  args: {
    children: '확인',
  }
};
