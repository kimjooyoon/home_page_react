import {useState} from "react";
import CalendarMolecule from "../../molecules/calendar/CalendarMolecule";
import CalendarNavigationMolecule from "../../molecules/calendar/CalendarNavigationMolecule";

const CalendarOrganism = () => {
  const [date, setDate] = useState({year: 2021, month: 7, day: 1});

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

  return (
    <>
      <CalendarNavigationMolecule
        currentDate={`${date.year}-${date.month < 10 ? `0${date.month}` : date.month}`}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
        onToday={handleToday}
      />
      <CalendarMolecule currentMonth={date.month} currentYear={date.year}/>
    </>
  );
};

export default CalendarOrganism;
