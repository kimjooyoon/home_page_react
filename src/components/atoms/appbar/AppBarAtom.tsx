import AppBar, {AppBarProps} from '@mui/material/AppBar';

const AppBarAtomFixed = (props: AppBarProps) => {
  return <AppBar
    position="fixed"
    sx={{
      boxShadow: 0,
      bgcolor: 'transparent',
      backgroundImage: 'none',
      mt: 2,
    }}
    {...props}
  />
}

export {AppBarAtomFixed}
