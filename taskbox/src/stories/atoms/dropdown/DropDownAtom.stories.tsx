import {Meta, StoryObj} from '@storybook/react';

import DropDown from '../../../../../src/components/atoms/dropdown/DropDownAtom';
import  {MenuItemAtomValueName} from '../../../../../src/components/atoms/menuitem/MenuItemAtom';

const meta: Meta<typeof DropDown> = {
  component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

export const Basic: Story = {
  args: {
    children: <MenuItemAtomValueName value={'test'} name={'Test'}/>
  }
};
