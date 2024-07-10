import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';

interface TagAtomProps {
  label: string;
  color: string;
  icon?: React.ReactNode;
}

const StyledChip = styled(Chip)(() => ({
  height: '40px',
  borderRadius: '20px',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '0 16px',
  '& .MuiChip-label': {
    padding: '0 12px',
  },
}));

const TagAtom = ({label, color, icon}: TagAtomProps) => {
  return (
    <Box sx={{margin: '8px 0'}}>
      <StyledChip
        label={<Typography variant="body1" sx={{fontSize: '16px', fontWeight: 'bold'}}>{label}</Typography>}
        sx={{backgroundColor: color, color: '#fff'}}
        icon={icon ? <Box sx={{display: 'flex', alignItems: 'center'}}>{icon}</Box> : undefined}
      />
    </Box>
  );
};

export default TagAtom;
