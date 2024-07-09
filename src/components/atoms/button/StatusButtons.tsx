import StyledButton from "./StyledButton";
import {styled} from "@mui/material/styles";

const PlannedButton = styled(StyledButton)(() => ({
  backgroundColor: '#F3E5AB',
  borderColor: '#D4B600',
  color: '#5D4000',
  '&:hover': {
    backgroundColor: '#E8D499',
  },
}));

const InProgressButton = styled(StyledButton)(() => ({
  backgroundColor: '#AFCBFF',
  borderColor: '#4578FF',
  color: '#0033CC',
  '&:hover': {
    backgroundColor: '#91B8FF',
  },
}));

const CanceledButton = styled(StyledButton)(() => ({
  backgroundColor: '#F5B7B1',
  borderColor: '#E74C3C',
  color: '#C0392B',
  '&:hover': {
    backgroundColor: '#E57373',
  },
}));

const CompletedButton = styled(StyledButton)(() => ({
  backgroundColor: '#A9DFBF',
  borderColor: '#28B463',
  color: '#1D8348',
  '&:hover': {
    backgroundColor: '#7DCEA0',
  },
}));

export {PlannedButton, InProgressButton, CanceledButton, CompletedButton};
