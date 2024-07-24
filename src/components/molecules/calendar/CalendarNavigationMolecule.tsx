import React from 'react';
import {IconButton} from '@mui/material';
import {ChevronLeft, ChevronRight} from '@mui/icons-material';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import ButtonAtom from "../../atoms/button/ButtonAtom.tsx";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";

interface CalendarNavigationMoleculeProps {
  currentDate: string; // 날짜 형식 예: "2024-07"
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

const CalendarNavigationMolecule: React.FC<CalendarNavigationMoleculeProps> =
  ({
     currentDate,
     onPrev,
     onNext,
     onToday
   }) => {
    return (
      <BoxAtom display="flex" alignItems="center" justifyContent="center" p={2} borderBottom={1} borderColor="divider">
        <ButtonAtom variant="outlined" onClick={onToday} sx={{marginRight: 2}}>
          오늘
        </ButtonAtom>
        <IconButton onClick={onPrev} sx={{marginX: 1}}>
          <ChevronLeft/>
        </IconButton>
        <TypographyAtom variant="h6" component="div" sx={{marginX: 2}}>
          {currentDate}
        </TypographyAtom>
        <IconButton onClick={onNext} sx={{marginX: 1}}>
          <ChevronRight/>
        </IconButton>
      </BoxAtom>
    );
  };

export default CalendarNavigationMolecule;
