// CalendarMoleculeUtils.ts
export interface TimeSlot {
  label: string;
  color: string;
  start: Date;
  end: Date;
}

export interface SlotType {
  label: string;
  color: string;
  type: 'inProgress' | 'start' | 'end' | 'start-end' | 'empty';
}

export const sampleTimeSlots: TimeSlot[] = [
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

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getGridPosition = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const dayOfMonth = date.getDate();
  return firstDayOfMonth + dayOfMonth - 1;
};

export const getSlotsForDay = (day: number, year: number, month: number, timeSlots: TimeSlot[]): SlotType[] => {
  const slots: SlotType[] = [];
  timeSlots.forEach((slot) => {
    const startPosition = getGridPosition(slot.start);
    const endPosition = getGridPosition(slot.end);
    const dayPosition = getGridPosition(new Date(year, month, day));

    if (dayPosition >= startPosition && dayPosition <= endPosition) {
      const type = dayPosition === startPosition
        ? (startPosition === endPosition ? 'start-end' : 'start')
        : (dayPosition === endPosition ? 'end' : 'inProgress');
      slots.push({ label: slot.label, color: slot.color, type });
    }
  });

  // 최대 4개의 슬롯만 반환
  return slots.slice(0, 4);
};
