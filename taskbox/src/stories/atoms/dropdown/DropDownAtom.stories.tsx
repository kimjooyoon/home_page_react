import {Meta, StoryObj} from '@storybook/react';

import DropDown from '../../../../../src/components/atoms/dropdown/DropDownAtom';
import MenuItemAtom from '../../../../../src/components/atoms/dropdown/menuitem/MenuItemAtom';

const meta: Meta<typeof DropDown> = {
  component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

export const Basic: Story = {
  args: {
    children: <MenuItemAtom value={'test'} name={'Test'}/>
  }
};
