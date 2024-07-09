import React from 'react';
import {Card, CardContent} from '@mui/material';
import {styled} from '@mui/material/styles';

const StyledCard = styled(Card)(({theme}) => ({
  border: '1px dashed purple',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));


interface MessageAtomProps {
  children?: React.ReactNode;
}

const MessageAtom: React.FC<MessageAtomProps> =
  ({
     children,
   }) => {
    return (
      <StyledCard>
        <CardContent>
          {children}
        </CardContent>
      </StyledCard>
    );
  };

export default MessageAtom;
