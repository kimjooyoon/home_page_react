import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import {CanceledButton, CompletedButton, InProgressButton, PlannedButton} from "../../atoms/button/StatusButtons.tsx";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";

const enum Status {
  Planned="planned",
  InProgress="inProgress",
  Canceled="canceled",
  Completed="completed",
  Empty="empty"
}

interface Props {
  title: string,
  startDate: string,
  endDate: string,
  status: string
}

function renderStatus(s: Status) {
  switch (s) {
    case Status.Planned:
      return <PlannedButton>준비됨</PlannedButton>
    case Status.InProgress:
      return <InProgressButton>진행중</InProgressButton>
    case Status.Canceled:
      return <CanceledButton>취소됨</CanceledButton>
    case Status.Completed:
      return <CompletedButton>완료됨</CompletedButton>
  }
}

function stringToStatus(str: string) {
  switch (str){
    case Status.Planned:
      return Status.Planned
    case Status.InProgress:
      return Status.InProgress
    case Status.Canceled:
      return Status.Canceled
    case Status.Completed:
      return Status.Completed
    case Status.Empty:
      return Status.Empty
    default:
      return Status.Empty
  }
}

const WorkTitleMolecule = ({status, title, startDate, endDate}: Props) => {
  const statusEnum = stringToStatus(status)
  return <BoxAtom>
    {renderStatus(statusEnum)}
    <TypographyAtom variant="h6" sx={{ marginTop: '8px' }}>
      {title}
    </TypographyAtom>
    <TypographyAtom variant="body2" color="textSecondary">
      {startDate} ~ {endDate}
    </TypographyAtom>
  </BoxAtom>
}

export default WorkTitleMolecule;
