import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import {CanceledButton, CompletedButton, InProgressButton, PlannedButton} from "../../atoms/button/StatusButtons.tsx";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";

export const enum Status {
  Planned="planned",
  InProgress="inProgress",
  Canceled="canceled",
  Completed="completed"
}

interface Props {
  title: string,
  startDate: string,
  endDate: string,
  status: Status
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

const workTitleMolecule = ({status, title, startDate, endDate}: Props) => {
  return <BoxAtom>
    {renderStatus(status)}
    <TypographyAtom variant="h6" sx={{ marginTop: '8px' }}>
      {title}
    </TypographyAtom>
    <TypographyAtom variant="body2" color="textSecondary">
      {startDate} ~ {endDate}
    </TypographyAtom>
  </BoxAtom>
}

export default workTitleMolecule;
