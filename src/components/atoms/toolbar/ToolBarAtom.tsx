import {Toolbar, ToolbarProps} from "@mui/material";
import React from "react";

const ToolBarAtom = (props: ToolbarProps) => {
  return <Toolbar {...props}/>
}

export default ToolBarAtom;

const ToolBarAtomNavigation: React.FC<ToolbarProps> = (props) => {
  return <ToolBarAtom
    {...props}
    variant="regular"
    sx={(theme) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
      borderRadius: '999px',
      bgcolor:
        theme.palette.mode === 'light'
          ? 'rgba(255, 255, 255, 0.4)'
          : 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(24px)',
      maxHeight: 40,
      border: '1px solid',
      borderColor: 'divider',
      boxShadow:
        theme.palette.mode === 'light'
          ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
          : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
    })}
  />
}

export {ToolBarAtomNavigation}
