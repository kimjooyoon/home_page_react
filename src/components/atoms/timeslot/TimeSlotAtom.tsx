import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TimeSlotAtomProps {
  label: string;
  color: string;
  type: 'inProgress' | 'start' | 'end' | 'start-end';
}

const TimeSlotAtom = ({ label, color, type }: TimeSlotAtomProps) => {
  const styles = {
    inProgress: {
      backgroundColor: color,
      padding: '4px 8px',
      margin: '2px 0',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      height: '20px', // 세로 길이 고정
    },
    start: {
      backgroundColor: color,
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
      padding: '4px 8px',
      margin: '2px 0',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      height: '20px', // 세로 길이 고정
    },
    end: {
      backgroundColor: color,
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      padding: '4px 8px',
      margin: '2px 0',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      height: '20px', // 세로 길이 고정
    },
    'start-end': {
      backgroundColor: color,
      borderRadius: '4px',
      padding: '4px 8px',
      margin: '2px 0',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      height: '20px', // 세로 길이 고정
    }
  };

  return (
    <Box sx={styles[type]}>
      <Typography variant="body2" sx={{ fontSize: '10px' }}>
        {type === 'start' || type === 'start-end' ? label : ''}
      </Typography>
    </Box>
  );
};

export default TimeSlotAtom;
