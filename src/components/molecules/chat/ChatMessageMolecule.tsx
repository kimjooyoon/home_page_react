import React from 'react';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";
import AvatarAtom from "../../atoms/avatar/AvatarAtom.tsx";

interface ChatMessageMoleculeProps {
  message: string;
  sender: string;
  timestamp: string;
  avatarUrl?: string;
  isOwnMessage?: boolean;
  unreadCount?: number; // 추가: 안 읽은 사람의 수
  isSent?: boolean; // 추가: 메시지가 전송되었는지 여부
}

const ChatMessageMolecule: React.FC<ChatMessageMoleculeProps> =
  ({
     message,
     sender,
     timestamp,
     avatarUrl,
     isOwnMessage,
     unreadCount = 0, // 기본값 설정
     isSent = true, // 기본값 설정
   }) => {
    return (
      <BoxAtom display="flex" flexDirection={isOwnMessage ? 'row-reverse' : 'row'} alignItems="center" mb={2}>
        {avatarUrl && (
          <AvatarAtom src={avatarUrl} alt={sender} sx={{ml: isOwnMessage ? 2 : 0, mr: isOwnMessage ? 0 : 2}}/>
        )}
        <BoxAtom
          bgcolor={isOwnMessage ? 'primary.A100' : 'background.default'}
          p={2}
          borderRadius={2}
          maxWidth="75%"
          position="relative"
        >
          <TypographyAtom variant="body2">{message}</TypographyAtom>
          <TypographyAtom variant="caption" align={isOwnMessage ? 'right' : 'left'}>
            {sender} - {timestamp}
          </TypographyAtom>
          <BoxAtom display="flex" justifyContent="space-between" mt={1}>
            {unreadCount > 0 && (
              <TypographyAtom variant="caption" color="error">
                {unreadCount} unread
              </TypographyAtom>
            )}
            {!isSent && (
              <TypographyAtom variant="caption" color="warning">
                Not sent
              </TypographyAtom>
            )}
          </BoxAtom>
        </BoxAtom>
      </BoxAtom>
    );
  };

export default ChatMessageMolecule;
