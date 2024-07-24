import CalendarTemplate from "../templates/calendar/CalendarTemplate.tsx";
import BoxAtom from "../atoms/box/BoxAtom.tsx";

const SchedulePage = () => {
  return (
    <BoxAtom sx={{marginTop: '5rem', width: '100%'}}>
      <CalendarTemplate/>
    </BoxAtom>
  )
}

export default SchedulePage
