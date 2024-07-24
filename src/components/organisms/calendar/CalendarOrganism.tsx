import React, {useState} from "react";
import CalendarMolecule from "../../molecules/calendar/CalendarMolecule";
import CalendarNavigationMolecule from "../../molecules/calendar/CalendarNavigationMolecule";
import CalendarSlotBoxMolecule from "../../molecules/calendar/CalendarSlotBoxMolecule";
import BoxAtom from "../../atoms/box/BoxAtom.tsx";

const CalendarOrganism = () => {
  const [date, setDate] = useState({year: 2021, month: 7, day: 1});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isSlotBoxVisible, setIsSlotBoxVisible] = useState(false);
  const [position, setPosition] = useState<{top: number; left: number} | null>(null);

  const handlePrevMonth = () => {
    setDate((prev) => {
      const prevMonth = prev.month - 1;
      return prevMonth === 0
        ? {year: prev.year - 1, month: 12, day: prev.day}
        : {...prev, month: prevMonth};
    });
  };

  const handleNextMonth = () => {
    setDate((prev) => {
      const nextMonth = prev.month + 1;
      return nextMonth === 13
        ? {year: prev.year + 1, month: 1, day: prev.day}
        : {...prev, month: nextMonth};
    });
  };

  const handleToday = () => {
    const today = new Date();
    setDate({year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate()});
  };

  const handleGridClick = (day: number, event: React.MouseEvent<HTMLDivElement>) => {
    const clickedDate = `${date.year}-${date.month < 10 ? `0${date.month}` : date.month}-${day < 10 ? `0${day}` : day}`;
    setSelectedDate(clickedDate);
    setIsSlotBoxVisible(true);

    // Calculate the position for CalendarSlotBoxMolecule
    const boxWidth = 600; // Adjust as needed
    const boxHeight = 400; // Adjust as needed
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let newLeft = event.clientX + 10;
    let newTop = event.clientY + 10;

    // Prevent the box from going off the right edge of the screen
    if (newLeft + boxWidth > windowWidth) {
      newLeft = windowWidth - boxWidth - 10;
    }

    // Prevent the box from going off the bottom edge of the screen
    if (newTop + boxHeight > windowHeight) {
      newTop = windowHeight - boxHeight - 10;
    }

    setPosition({top: newTop, left: newLeft});
  };

  const handleCloseSlotBox = () => {
    setIsSlotBoxVisible(false);
  };

  return (
    <>
      {isSlotBoxVisible && selectedDate && position && (
        <BoxAtom
          sx={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            zIndex: 10
          }}
        >
          <CalendarSlotBoxMolecule
            usage="calendar"  // "schedule"로 변경 가능
            onAdd={() => {}}
            onCancel={handleCloseSlotBox}
            currentTime={selectedDate}
          />
        </BoxAtom>
      )}
      <CalendarNavigationMolecule
        currentDate={`${date.year}-${date.month < 10 ? `0${date.month}` : date.month}`}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
        onToday={handleToday}
      />
      <CalendarMolecule currentMonth={date.month} currentYear={date.year} onGridClick={handleGridClick}/>
    </>
  );
};

export default CalendarOrganism;
