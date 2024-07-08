import {Meta, StoryObj} from '@storybook/react';

import TextFormAtom from '../../../../../src/components/atoms/textform/TextFormAtom';

const meta: Meta<typeof TextFormAtom> = {
  component: TextFormAtom,
};

export default meta;

type Story = StoryObj<typeof TextFormAtom>;

export const Basic: Story = {
  args: {
    value: 'hi'
  }
};
