import {Paper} from '@mui/material';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import React, {ReactNode} from "react";

export interface ChatLayerMoleculeProps {
  content: ReactNode;
  bottom: ReactNode;
}

const ChatLayerMolecule: React.FC<ChatLayerMoleculeProps> =
  ({content, bottom}) => {
    return <Paper elevation={3} sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
      <BoxAtom flex={1} overflow="auto" p={2}>
        {content}
      </BoxAtom>
      {bottom}
    </Paper>
  }

export default ChatLayerMolecule;
