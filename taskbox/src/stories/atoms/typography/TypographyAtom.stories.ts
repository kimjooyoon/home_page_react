import {Meta, StoryObj} from '@storybook/react';

import TypographyAtom from '../../../../../src/components/atoms/typography/TypographyAtom';

const meta: Meta<typeof TypographyAtom> = {
  component: TypographyAtom,
};

export default meta;

type Story = StoryObj<typeof TypographyAtom>;

export const h1_primary: Story = {
  args: {
    variant:"h1",
    children: 'this is single line atom',
  },
};
export const h2_primary: Story = {
  args: {
    variant:"h2",
    color:"textPrimary",
    children: 'this is single line atom',
  },
};
export const h3_primary: Story = {
  args: {
    variant:"h3",
    color:"textPrimary",
    children: 'this is single line atom',
  },
};
export const h4_primary: Story = {
  args: {
    variant:"h4",
    color:"textPrimary",
    children: 'this is single line atom',
  },
};
export const body1_primary: Story = {
  args: {
    variant:"body1",
    color:"textPrimary",
    children: 'this is single line atom',
  },
};
export const body2_primary: Story = {
  args: {
    variant:"body2",
    color:"textPrimary",
    children: 'this is single line atom',
  },
};

export const h1_secondary: Story = {
  args: {
    variant:"h1",
    color:"textSecondary",
    children: 'this is single line atom',
  },
};
export const h2_secondary: Story = {
  args: {
    variant:"h2",
    color:"textSecondary",
    children: 'this is single line atom',
  },
};
export const h3_secondary: Story = {
  args: {
    variant:"h3",
    color:"textSecondary",
    children: 'this is single line atom',
  },
};
export const h4_secondary: Story = {
  args: {
    variant:"h4",
    color:"textSecondary",
    children: 'this is single line atom',
  },
};
export const body1_secondary: Story = {
  args: {
    variant:"body1",
    color:"textSecondary",
    children: 'this is single line atom',
  },
};
export const body2_secondary: Story = {
  args: {
    variant:"body2",
    color:"textSecondary",
    children: 'this is single line atom',
  },
};
