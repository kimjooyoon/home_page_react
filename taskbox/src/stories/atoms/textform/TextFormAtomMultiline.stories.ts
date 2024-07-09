import {Meta, StoryObj} from '@storybook/react';

import {TextFieldAtomMultiline} from '../../../../../src/components/atoms/textform/TextFormAtom';

const meta: Meta<typeof TextFieldAtomMultiline> = {
  component: TextFieldAtomMultiline,
};

export default meta;

type Story = StoryObj<typeof TextFieldAtomMultiline>;

export const Basic: Story = {
  args: {
    value: 'this is multiline atom',
  }
};
