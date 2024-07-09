import {Meta, StoryObj} from '@storybook/react';

import {TextFieldMultilineAtom} from '../../../../../src/components/atoms/textform/TextFormAtom';

const meta: Meta<typeof TextFieldMultilineAtom> = {
  component: TextFieldMultilineAtom,
};

export default meta;

type Story = StoryObj<typeof TextFieldMultilineAtom>;

export const Basic: Story = {
  args: {
    value: 'this is multiline atom',
  }
};
