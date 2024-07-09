// TaskCard.tsx
import TypographyAtom from '../../atoms/typography/TypographyAtom';

const TaskCard = ({title, startDate, endDate}: {
  title: string,
  startDate: string,
  endDate: string
}) => {
  return (
    <>
      <TypographyAtom variant="h6" sx={{marginTop: '8px'}}>
        {title}
      </TypographyAtom>
      <TypographyAtom variant="body2" color="textSecondary">
        {startDate} ~ {endDate}
      </TypographyAtom>
    </>
  );
};

export default TaskCard;
