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

// Sample time slots for testing
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
  {
    label: 'Work C',
    color: '#4caf50',
    start: new Date('2024-07-02'),
    end: new Date('2024-07-06')
  },
  // Add more sample time slots here
];

// Function to get the number of days in a given month
export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

// Function to get the grid position (index) of a given date
export const getGridPosition = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const dayOfMonth = date.getDate();
  return firstDayOfMonth + dayOfMonth - 1;
};

// Function to get the slots for a specific day
export const getSlotsForDay = (day: number, year: number, month: number, timeSlots: TimeSlot[]): SlotType[] => {
  const slots: SlotType[] = [];

  // Iterate over each time slot
  timeSlots.forEach((slot) => {
    const startPosition = getGridPosition(slot.start); // Start position of the slot
    const endPosition = getGridPosition(slot.end); // End position of the slot
    const dayPosition = getGridPosition(new Date(year, month, day)); // Position of the current day

    // Check if the current day is within the slot range
    if (dayPosition >= startPosition && dayPosition <= endPosition) {
      // Determine the type of the slot based on its position
      const type = dayPosition === startPosition
        ? (startPosition === endPosition ? 'start-end' : 'start')
        : (dayPosition === endPosition ? 'end' : 'inProgress');

      // Add the slot to the list
      slots.push({ label: slot.label, color: slot.color, type });
    }
  });

  // Return a maximum of 4 slots
  return slots.slice(0, 4);
};
