// src/components/molecules/chat/ChatWindow.tsx

import React from 'react';
import { Paper } from '@mui/material';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";

interface Message {
  id: number;
  message: string;
  sender: string;
  timestamp: string;
  avatarUrl?: string;
  isOwnMessage?: boolean;
}

interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage }) => {
  return (
    <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <BoxAtom flex={1} overflow="auto" p={2}>
        {messages.map((msg) => (
          <ChatMessage key={msg.id} {...msg} />
        ))}
      </BoxAtom>
      <ChatInput onSendMessage={onSendMessage} />
    </Paper>
  );
};

export default ChatWindow;
