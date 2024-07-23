import React from 'react';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";
import AvatarAtom from "../../atoms/avatar/AvatarAtom.tsx";

interface ChatMessageProps {
  message: string;
  sender: string;
  timestamp: string;
  avatarUrl?: string;
  isOwnMessage?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({message, sender, timestamp, avatarUrl, isOwnMessage}) => {
  return (
    <BoxAtom display="flex" flexDirection={isOwnMessage ? 'row-reverse' : 'row'} alignItems="center" mb={2}>
      {avatarUrl && (
        <AvatarAtom src={avatarUrl} alt={sender} sx={{ml: isOwnMessage ? 2 : 0, mr: isOwnMessage ? 0 : 2}}/>
      )}
      <BoxAtom
        bgcolor={'background.default'}
        p={2}
        borderRadius={2}
        maxWidth="75%"
      >
        <TypographyAtom variant="body2">{message}</TypographyAtom>
        <TypographyAtom variant="caption" align={isOwnMessage ? 'right' : 'left'}>
          {sender} - {timestamp}
        </TypographyAtom>
      </BoxAtom>
    </BoxAtom>
  );
};

export default ChatMessage;
