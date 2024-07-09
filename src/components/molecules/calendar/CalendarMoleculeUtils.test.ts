import { getDaysInMonth, getGridPosition, getSlotsForDay, TimeSlot } from './CalendarMoleculeUtils';

describe('CalendarMoleculeUtils', () => {

  describe('getDaysInMonth', () => {
    it('should return the correct number of days in a month', () => {
      // 2024년 1월에는 31일이 있어야 합니다.
      expect(getDaysInMonth(2024, 0)).toBe(31);

      // 2024년 2월에는 윤년으로 29일이 있어야 합니다.
      expect(getDaysInMonth(2024, 1)).toBe(29);

      // 2024년 3월에는 31일이 있어야 합니다.
      expect(getDaysInMonth(2024, 2)).toBe(31);

      // 2024년 4월에는 30일이 있어야 합니다.
      expect(getDaysInMonth(2024, 3)).toBe(30);
    });
  });

  describe('getGridPosition', () => {
    it('should return the correct grid position for a given date', () => {
      // 2024년 7월 1일 (월요일)의 그리드 위치는 1이어야 합니다.
      expect(getGridPosition(new Date('2024-07-01'))).toBe(1);

      // 2024년 7월 2일 (화요일)의 그리드 위치는 2이어야 합니다.
      expect(getGridPosition(new Date('2024-07-02'))).toBe(2);

      // 2024년 7월 3일 (수요일)의 그리드 위치는 3이어야 합니다.
      expect(getGridPosition(new Date('2024-07-03'))).toBe(3);

      // 2024년 7월 31일 (수요일)의 그리드 위치는 31이어야 합니다.
      expect(getGridPosition(new Date('2024-07-31'))).toBe(31);
    });
  });

  describe('getSlotsForDay', () => {
    // 샘플 슬롯 데이터
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
      const day = 4; // 2024년 7월 4일

      // 주어진 날짜에 대한 슬롯을 가져옵니다.
      const result = getSlotsForDay(day, 2024, 6, slots);

      // 최대 3개의 슬롯만 반환되어야 합니다.
      expect(result.length).toBe(3);

      // 반환된 슬롯 정보가 정확해야 합니다.
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
      const day = 10; // 2024년 7월 10일

      // 주어진 날짜에 슬롯이 없는 경우를 처리합니다.
      const result = getSlotsForDay(day, 2024, 6, slots);

      // 반환된 결과는 빈 배열이어야 합니다.
      expect(result.length).toBe(0);
    });
  });
});
