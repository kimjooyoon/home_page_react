import {forwardRef} from "react";
import {Icon, IconProps} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import MenuIcon from "@mui/icons-material/Menu";

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

export {IconAtomSave, IconAtomMenu};
