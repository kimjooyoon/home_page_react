// CalendarMolecule.tsx
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CalendarDayHeaderAtom from '../../atoms/header/CalendarDayHeaderAtom';
import CalendarGridCellAtom from '../../atoms/grid/CalendarGridCellAtom';
import TimeSlotAtom from '../../atoms/timeslot/TimeSlotAtom';
import { getDaysInMonth, sampleTimeSlots, SlotType, getSlotsForDay } from './CalendarMoleculeUtils';

const CalendarMolecule = () => {
  const currentMonth = 6; // July
  const currentYear = 2024;
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const gridCells = Array.from({ length: 42 }).map((_, index) => {
    const day = index < daysInMonth + new Date(currentYear, currentMonth, 1).getDay() && index >= new Date(currentYear, currentMonth, 1).getDay()
      ? index - new Date(currentYear, currentMonth, 1).getDay() + 1
      : undefined;

    const slots: SlotType[] = day !== undefined ? getSlotsForDay(day, currentYear, currentMonth, sampleTimeSlots) : [];

    return (
      <Grid item xs={12 / 7} key={index} sx={{ padding: 0 }}>
        <CalendarGridCellAtom day={day}>
          {slots.map((slot, i) => (
            <TimeSlotAtom
              key={i}
              label={slot.label}
              color={slot.color}
              type={slot.type}
            />
          ))}
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
