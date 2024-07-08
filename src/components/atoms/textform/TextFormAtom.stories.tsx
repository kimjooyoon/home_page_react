import {Meta, StoryFn} from '@storybook/react';
import TextFormAtom from './TextFormAtom';

export default {
  title: 'Atoms/TextFormAtom',
  component: TextFormAtom,
} as Meta<typeof TextFormAtom>;

const Template: StoryFn<typeof TextFormAtom> = () => <TextFormAtom/>;

export const Default = Template.bind({});

Default.args = {};
