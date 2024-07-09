import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CalendarDayHeaderAtom from '../../atoms/header/CalendarDayHeaderAtom';
import CalendarGridCellAtom from '../../atoms/grid/CalendarGridCellAtom';
import TimeSlotAtom from '../../atoms/timeslot/TimeSlotAtom';

const sampleTimeSlots = [
  {
    label: 'Work A',
    color: '#3f51b5',
    start: new Date('2024-07-02'),
    end: new Date('2024-07-02')
  },
  {
    label: 'Work B',
    color: '#4caf50',
    start: new Date('2024-07-03'),
    end: new Date('2024-07-05')
  },
  // Add more sample time slots here
];

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getGridPosition = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const dayOfMonth = date.getDate();
  return firstDayOfMonth + dayOfMonth - 1;
};

const CalendarMolecule = () => {
  const currentMonth = 6; // July
  const currentYear = 2024;
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const gridCells = Array.from({ length: 42 }).map((_, index) => {
    const day = index < daysInMonth + new Date(currentYear, currentMonth, 1).getDay() && index >= new Date(currentYear, currentMonth, 1).getDay()
      ? index - new Date(currentYear, currentMonth, 1).getDay() + 1
      : undefined;

    return (
      <Grid item xs={12 / 7} key={index} sx={{ padding: 0 }}>
        <CalendarGridCellAtom day={day}>
          {day !== undefined &&
            sampleTimeSlots.map((slot, i) => {
              const startPosition = getGridPosition(slot.start);
              const endPosition = getGridPosition(slot.end);
              const slotType = index === startPosition
                ? (startPosition === endPosition ? 'start-end' : 'start')
                : (index === endPosition ? 'end' : 'inProgress');

              return (
                index >= startPosition && index <= endPosition && (
                  <TimeSlotAtom
                    key={i}
                    label={slot.label}
                    color={slot.color}
                    type={slotType}
                  />
                )
              );
            })}
        </CalendarGridCellAtom>
      </Grid>
    );
  });

  return (
    <Box sx={{ width: '100%', height: 'auto' }}>
      <CalendarDayHeaderAtom />
      <Grid container spacing={0}>
        {gridCells}
      </Grid>
    </Box>
  );
};

export default CalendarMolecule;
