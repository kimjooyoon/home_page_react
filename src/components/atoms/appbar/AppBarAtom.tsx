// AppBarAtom.tsx
import AppBar, {AppBarProps} from '@mui/material/AppBar';

const AppBarAtomFixed = (props: AppBarProps) => {
  return <AppBar
    position="fixed"
    sx={{
      boxShadow: 0,
      bgcolor: 'transparent',
      backgroundImage: 'none',
      mt: 2, // material ui: margin-top(2) == mt(2) = spacing(2) == 16
    }}
    {...props}
  />
}

export {AppBarAtomFixed}
