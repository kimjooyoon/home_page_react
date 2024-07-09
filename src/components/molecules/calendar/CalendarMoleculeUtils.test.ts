import { getDaysInMonth, getGridPosition, getSlotsForDay, TimeSlot } from './CalendarMoleculeUtils';

describe('CalendarMoleculeUtils', () => {
  describe('getDaysInMonth', () => {
    it('should return the correct number of days in a month', () => {
      expect(getDaysInMonth(2024, 0)).toBe(31); // January
      expect(getDaysInMonth(2024, 1)).toBe(29); // February (leap year)
      expect(getDaysInMonth(2024, 2)).toBe(31); // March
      expect(getDaysInMonth(2024, 3)).toBe(30); // April
    });
  });

  describe('getGridPosition', () => {
    it('should return the correct grid position for a given date', () => {
      expect(getGridPosition(new Date('2024-07-01'))).toBe(1); // July 1, 2024 (Monday)
      expect(getGridPosition(new Date('2024-07-02'))).toBe(2); // July 2, 2024 (Tuesday)
      expect(getGridPosition(new Date('2024-07-03'))).toBe(3); // July 3, 2024 (Wednesday)
      expect(getGridPosition(new Date('2024-07-31'))).toBe(31); // July 31, 2024 (Wednesday)
    });
  });

  describe('getSlotsForDay', () => {
    const slots: TimeSlot[] = [
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
        color: '#f44336',
        start: new Date('2024-07-01'),
        end: new Date('2024-07-04')
      },
      {
        label: 'Work D',
        color: '#ff9800',
        start: new Date('2024-07-04'),
        end: new Date('2024-07-07')
      },
      {
        label: 'Work E',
        color: '#9c27b0',
        start: new Date('2024-07-05'),
        end: new Date('2024-07-08')
      },
    ];

    it('should return the correct slots for a given day', () => {
      const day = 4; // July 4, 2024
      const result = getSlotsForDay(day, 2024, 6, slots);
      expect(result.length).toBe(3); // 최대 3개의 슬롯만 반환
      expect(result).toEqual([
        {
          "color": "#4caf50",
          "label": "Work B",
          "type": "inProgress"
        },
        {
          "color": "#f44336",
          "label": "Work C",
          "type": "end"
        },
        {
          "color": "#ff9800",
          "label": "Work D",
          "type": "start"
        }
      ]);
    });

    it('should handle days with no slots', () => {
      const day = 10; // July 10, 2024
      const result = getSlotsForDay(day, 2024, 6, slots);
      expect(result.length).toBe(0);
    });
  });
});
