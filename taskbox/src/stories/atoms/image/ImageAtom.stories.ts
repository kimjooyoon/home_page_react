import {Meta, StoryObj} from '@storybook/react';

import ImageAtom from '../../../../../src/components/atoms/image/ImageAtom';

const meta: Meta<typeof ImageAtom> = {
  component: ImageAtom,
};

export default meta;

type Story = StoryObj<typeof ImageAtom>;

export const Basic: Story = {
  args: {
    src: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg',
    alt: 'logo of sitemark'
  }
};
