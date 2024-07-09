import {forwardRef} from "react";
import {Icon, IconProps} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

const IconAtom = forwardRef<HTMLElement, IconProps>
((props, ref) => {
  return <Icon ref={ref} {...props}/>
})

export default IconAtom;

const IconAtomSave = () => {
  return <Icon component={SaveIcon}/>;
}

const IconAtomMenu = () => {
  return <Icon component={MenuIcon}/>;
}

const IconAtomWbSunnyRounded = () => {
  return <Icon component={WbSunnyRoundedIcon}  fontSize="small"/>;
}


const IconAtomModeNightRounded = () => {
  return <Icon component={ModeNightRoundedIcon}  fontSize="small"/>;
}

export {
  IconAtomSave, IconAtomMenu,
  IconAtomWbSunnyRounded,
  IconAtomModeNightRounded
};
