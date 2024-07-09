import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarGridAtom = () => {
  return (
    <Grid container spacing={1} sx={{ padding: '16px' }}>
      {daysOfWeek.map((day, index) => (
        <Grid item xs={12 / 7} key={index} sx={{ border: '1px solid #E0E0E0', height: '40px' }}>
          <Typography variant="body2">{day}</Typography>
        </Grid>
      ))}
      {Array.from({ length: 42 }).map((_, index) => (
        <Grid item xs={12 / 7} key={index} sx={{ border: '1px solid #E0E0E0', height: '100px' }}>
          {/* 이곳에 Molecule 레벨에서 TimeSlotAtom을 삽입합니다 */}
        </Grid>
      ))}
    </Grid>
  );
};

export default CalendarGridAtom;
