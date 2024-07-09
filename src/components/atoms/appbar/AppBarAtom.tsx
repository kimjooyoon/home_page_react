import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import {PaletteMode} from '@mui/material';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

import ButtonAtom from "../button/ButtonAtom.tsx";
import BoxAtom from "../box/BoxAtom.tsx";
import TypographyAtom from "../typography/TypographyAtom.tsx";
import MenuItemAtom from "../menuitem/MenuItemAtom.tsx";
import {IconAtomMenu} from "../icon/IconAtom.tsx";
import {ToolBarAtomNavigation} from "../toolbar/ToolBarAtom.tsx";
import DividerAtom from "../divider/DividerAtom.tsx";
import ContainerAtom from "../container/ContainerAtom.tsx";
import DrawerAtom from "../drawer/DrawerAtom.tsx";
import ImageAtom from "../image/ImageAtom";

interface ToggleColorModeProps {
  mode: PaletteMode;
}

function ToggleColorMode({mode}: ToggleColorModeProps) {
  return (
    <BoxAtom sx={{maxWidth: '32px'}}>
      <ButtonAtom
        variant="text"
        size="small"
        aria-label="button to toggle theme"
        onClick={() => {
        }}
        sx={{minWidth: '32px', height: '32px', p: '4px'}}
      >
        {mode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="small"/>
        ) : (
          <ModeNightRoundedIcon fontSize="small"/>
        )}
      </ButtonAtom>
    </BoxAtom>
  );
}


const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar({mode}: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <ContainerAtom maxWidth="lg">
          <ToolBarAtomNavigation>
            <BoxAtom
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <ImageAtom
                src={
                  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <BoxAtom sx={{display: {xs: 'none', md: 'flex'}}}>
                <MenuItemAtom
                  sx={{py: '6px', px: '12px'}}
                >
                  <TypographyAtom variant="body2" color="text.primary">
                    Features
                  </TypographyAtom>
                </MenuItemAtom>
                <MenuItemAtom
                  sx={{py: '6px', px: '12px'}}
                >
                  <TypographyAtom variant="body2" color="text.primary">
                    Testimonials
                  </TypographyAtom>
                </MenuItemAtom>
                <MenuItemAtom
                  sx={{py: '6px', px: '12px'}}
                >
                  <TypographyAtom variant="body2" color="text.primary">
                    Highlights
                  </TypographyAtom>
                </MenuItemAtom>
                <MenuItemAtom
                  sx={{py: '6px', px: '12px'}}
                >
                  <TypographyAtom variant="body2" color="text.primary">
                    Pricing
                  </TypographyAtom>
                </MenuItemAtom>
                <MenuItemAtom
                  sx={{py: '6px', px: '12px'}}
                >
                  <TypographyAtom variant="body2" color="text.primary">
                    FAQ
                  </TypographyAtom>
                </MenuItemAtom>
              </BoxAtom>
            </BoxAtom>
            <BoxAtom
              sx={{
                display: {xs: 'none', md: 'flex'},
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode}/>
              <ButtonAtom
                color="primary"
                variant="text"
                size="small"
                onClick={() => {
                }}
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
              >
                Sign in
              </ButtonAtom>
              <ButtonAtom
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-up/"
                onClick={() => {
                }}
              >
                Sign up
              </ButtonAtom>
            </BoxAtom>
            <BoxAtom sx={{display: {sm: '', md: 'none'}}}>
              <ButtonAtom
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{minWidth: '30px', p: '4px'}}
              >
                <IconAtomMenu/>
              </ButtonAtom>
              <DrawerAtom anchor="right" open={open} onClose={toggleDrawer(false)}>
                <BoxAtom
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <BoxAtom
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode}/>
                  </BoxAtom>
                  <MenuItemAtom>
                    Features
                  </MenuItemAtom>
                  <MenuItemAtom>
                    Testimonials
                  </MenuItemAtom>
                  <MenuItemAtom>
                    Highlights
                  </MenuItemAtom>
                  <MenuItemAtom>
                    Pricing
                  </MenuItemAtom>
                  <MenuItemAtom>
                    FAQ
                  </MenuItemAtom>
                  <DividerAtom/>
                  <MenuItemAtom>
                    <ButtonAtom
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      onClick={toggleDrawer(true)}
                      sx={{width: '100%'}}
                    >
                      Sign up
                    </ButtonAtom>
                  </MenuItemAtom>
                  <MenuItemAtom>
                    <ButtonAtom
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      onClick={toggleDrawer(true)}
                      sx={{width: '100%'}}
                    >
                      Sign in
                    </ButtonAtom>
                  </MenuItemAtom>
                </BoxAtom>
              </DrawerAtom>
            </BoxAtom>
          </ToolBarAtomNavigation>
        </ContainerAtom>
      </AppBar>
    </div>
  );
}

export default AppAppBar;