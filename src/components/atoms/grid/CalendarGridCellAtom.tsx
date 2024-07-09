// CalendarGridCellAtom.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from "react";

interface CalendarGridCellAtomProps {
  day?: number;
  children?: React.ReactNode;
}

const CalendarGridCellAtom = ({ day, children }: CalendarGridCellAtomProps) => {
  return (
    <Box sx={{ border: '1px solid #E0E0E0', height: '100px', position: 'relative', padding: '0px', boxSizing: 'border-box' }}>
      {day !== undefined && <Typography variant="body2" sx={{ position: 'absolute', top: 0, right: 0, padding: '4px' }}>{day}</Typography>}
      {children}
    </Box>
  );
};

export default CalendarGridCellAtom;
