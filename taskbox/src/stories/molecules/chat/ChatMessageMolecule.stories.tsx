import {Meta, StoryObj} from '@storybook/react';
import ChatMessageMolecule from '../../../../../src/components/molecules/chat/ChatMessageMolecule';

const meta: Meta<typeof ChatMessageMolecule> = {
  component: ChatMessageMolecule,
  title: 'Molecules/ChatMessageMolecule',
};

export default meta;

type Story = StoryObj<typeof ChatMessageMolecule>;

export const Basic: Story = {
  args: {
    message: 'Hello! How are you?',
    sender: 'Alice',
    timestamp: '10:00 AM',
    avatarUrl: 'https://example.com/alice.jpg',
    isOwnMessage: false,
  },
};

export const OwnMessage: Story = {
  args: {
    message: "I'm good, thanks! How about you?",
    sender: 'Bob',
    timestamp: '10:01 AM',
    avatarUrl: 'https://example.com/bob.jpg',
    isOwnMessage: true,
  },
};
