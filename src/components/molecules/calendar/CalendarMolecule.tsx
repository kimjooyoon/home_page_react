// CalendarMolecule.tsx
import CalendarDayHeaderAtom from '../../atoms/header/CalendarDayHeaderAtom';
import CalendarGridCellAtom from '../../atoms/grid/CalendarGridCellAtom';
import TimeSlotAtom from '../../atoms/timeslot/TimeSlotAtom';
import {getDaysInMonth, sampleTimeSlots, SlotType, getSlotsForDay} from './CalendarMoleculeUtils';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import GridAtom from "../../atoms/grid/GridAtom.tsx";

interface CalendarMoleculeProps {
  currentMonth: number
  currentYear: number
}

const CalendarMolecule: React.FC<CalendarMoleculeProps> =
  ({currentMonth, currentYear}) => {
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const gridCells = Array.from({length: 42}).map((_, index) => {
    const day = index < daysInMonth + new Date(currentYear, currentMonth, 1).getDay() && index >= new Date(currentYear, currentMonth, 1).getDay()
      ? index - new Date(currentYear, currentMonth, 1).getDay() + 1
      : undefined;

    const slots: SlotType[] = day !== undefined ? getSlotsForDay(day, currentYear, currentMonth, sampleTimeSlots) : [];

    return (
      <GridAtom item xs={12 / 7} key={index} sx={{padding: 0}}>
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
      </GridAtom>
    );
  });

  return (
    <BoxAtom sx={{width: '100%', height: 'auto'}}>
      <CalendarDayHeaderAtom/>
      <GridAtom container spacing={0}>
        {gridCells}
      </GridAtom>
    </BoxAtom>
  );
};

export default CalendarMolecule;
