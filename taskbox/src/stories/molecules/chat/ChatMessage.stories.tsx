import {Meta, StoryObj} from '@storybook/react';
import ChatMessage from '../../../../../src/components/molecules/chat/ChatMessage';

const meta: Meta<typeof ChatMessage> = {
  component: ChatMessage,
  title: 'Molecules/ChatMessage',
};

export default meta;

type Story = StoryObj<typeof ChatMessage>;

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
