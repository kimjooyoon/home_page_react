import React, {useState} from 'react';
import {IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InputAtom from '../../atoms/textform/InputAtom';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";

interface ChatInputMoleculeProps {
  onSendMessage: (message: string) => void;
}

const ChatInputMolecule: React.FC<ChatInputMoleculeProps> = ({onSendMessage}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <BoxAtom display="flex" alignItems="center" p={2} bgcolor="background.paper">
      <InputAtom
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"
        fullWidth
        multiline
        rows={2}
      />
      <IconButton color="primary" onClick={handleSendMessage}>
        <SendIcon/>
      </IconButton>
    </BoxAtom>
  );
};

export default ChatInputMolecule;
