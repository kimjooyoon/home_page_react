// src/components/molecules/chat/ChatWindowOrganism.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import ChatWindowOrganism from '../../../../../src/components/organisms/chat/ChatWindowOrganism';
import { useState } from 'react';

const meta: Meta<typeof ChatWindowOrganism> = {
  component: ChatWindowOrganism,
  title: 'Organisms/ChatWindowOrganism',
};

export default meta;

type Story = StoryObj<typeof ChatWindowOrganism>;

export const Basic: Story = {
  render: () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message: string) => {
      const newMessage = {
        id: messages.length + 1,
        message,
        sender: 'You',
        timestamp: new Date().toLocaleTimeString(),
        isOwnMessage: true,
      };
      setMessages([...messages, newMessage]);
    };

    return <ChatWindowOrganism messages={messages} onSendMessage={handleSendMessage} />;
  },
};

export const WithMessages: Story = {
  render: () => {
    const initialMessages = [
      {
        id: 1,
        message: 'Hello! How are you?',
        sender: 'Alice',
        timestamp: '10:00 AM',
        avatarUrl: 'https://example.com/alice.jpg',
        isOwnMessage: false,
      },
      {
        id: 2,
        message: "I'm good, thanks! How about you?",
        sender: 'Bob',
        timestamp: '10:01 AM',
        avatarUrl: 'https://example.com/bob.jpg',
        isOwnMessage: true,
      },
    ];

    const ChatWindowWithMessages = () => {
      const [messages, setMessages] = useState(initialMessages);

      const handleSendMessage = (message: string) => {
        const newMessage = {
          id: messages.length + 1,
          message,
          sender: 'You',
          timestamp: new Date().toLocaleTimeString(),
          avatarUrl: 'https://example.com/bob.jpg',
          isOwnMessage: true,
        };
        setMessages([...messages, newMessage]);
      };

      return <ChatWindowOrganism messages={messages} onSendMessage={handleSendMessage} />;
    };

    return <ChatWindowWithMessages />;
  },
};
