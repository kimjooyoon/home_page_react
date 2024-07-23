// src/components/organisms/chat/ChatWindowOrganism.tsx

import React from 'react';
import ChatMessageMolecule from '../../molecules/chat/ChatMessageMolecule.tsx';
import ChatInputMolecule from '../../molecules/chat/ChatInputMolecule.tsx';
import ChatLayerMolecule from "../../molecules/chat/ChatLayerMolecule.tsx";

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

const ChatWindowOrganism: React.FC<ChatWindowProps> = ({messages, onSendMessage}) => {
  return (

    <ChatLayerMolecule
      content={messages.map((msg) => (
        <ChatMessageMolecule key={msg.id} {...msg} />
      ))}
      bottom={<ChatInputMolecule onSendMessage={onSendMessage}/>}
    >

    </ChatLayerMolecule>
  );
};

export default ChatWindowOrganism;
