import React from 'react';
import {TextField} from '@mui/material';
import {CalendarToday, Person, Description} from '@mui/icons-material';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import ButtonAtom from "../../atoms/button/ButtonAtom.tsx";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";
import AvatarAtom from "../../atoms/avatar/AvatarAtom.tsx";
import TextFieldAtom from "../../atoms/textfield/TextFieldAtom.tsx";

interface CalendarSlotBoxMoleculeProps {
  usage: 'calendar' | 'schedule'; // usage에 따라 다른 UI를 제공
  onAdd: () => void;
  onCancel: () => void;
  currentTime: string; // For simplicity, let's assume this is a string.
}

const CalendarSlotBoxMolecule: React.FC<CalendarSlotBoxMoleculeProps> =
  ({
     usage,
     onAdd,
     onCancel,
     currentTime,
   }) => {
    return (
      <BoxAtom
        p={2}
        border="1px solid #ccc"
        borderRadius="8px"
        maxWidth="400px"
        width='400px'
        bgcolor={"white"}
        mx="auto"
        my={2}
        position="absolute"
        zIndex={1000}
      >
        <TextFieldAtom
          fullWidth
          variant="outlined"
          placeholder="제목 및 시간 추가"
          margin="normal"
        />
        <BoxAtom display="flex" justifyContent="space-between" mb={2}>
          <ButtonAtom startIcon={<CalendarToday/>} variant="contained" color="primary" onClick={() => {
          }}>
            {usage === 'calendar' ? '캘린더' : '스케줄'}
          </ButtonAtom>
        </BoxAtom>
        <BoxAtom display="flex" alignItems="center" mb={2}>
          <AvatarAtom src={''} alt={''}>
            <CalendarToday/>
          </AvatarAtom>
          <TypographyAtom variant="body1" ml={2}>
            {currentTime}
          </TypographyAtom>
        </BoxAtom>
        {usage === 'schedule' && (
          <BoxAtom display="flex" alignItems="center" mb={2}>
            <AvatarAtom src={''} alt={''}>
              <Person/>
            </AvatarAtom>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="참여자"
              margin="normal"
            />
          </BoxAtom>
        )}
        <TextField
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          placeholder="설명"
          margin="normal"
          InputProps={{
            startAdornment: <Description/>,
          }}
        />
        <BoxAtom display="flex" justifyContent="flex-end" mt={2}>
          <ButtonAtom onClick={onCancel} variant="outlined" sx={{mr: 2}}>
            취소
          </ButtonAtom>
          <ButtonAtom onClick={onAdd} variant="contained" color="primary">
            추가
          </ButtonAtom>
        </BoxAtom>
      </BoxAtom>
    );
  };

export default CalendarSlotBoxMolecule;
