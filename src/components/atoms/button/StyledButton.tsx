import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

const StyledButton = styled(Button)(({theme}) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default StyledButton;
