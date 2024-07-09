// CalendarDayHeaderAtom.tsx
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarDayHeaderAtom = () => {
  return (
    <Grid container spacing={0}>
      {daysOfWeek.map((day, index) => (
        <Grid item xs={12 / 7} key={index} sx={{ border: '1px solid #E0E0E0', height: '40px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Typography variant="body2">{day}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CalendarDayHeaderAtom;
