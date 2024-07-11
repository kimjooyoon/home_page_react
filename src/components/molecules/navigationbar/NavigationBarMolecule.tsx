import * as React from "react";
import {PaletteMode} from "@mui/material";
import Box from "../../atoms/box/BoxAtom.tsx";
import Button from "../../atoms/button/ButtonAtom.tsx";
import Container from "../../atoms/container/ContainerAtom.tsx";
import {ToolBarAtomNavigation} from "../../atoms/toolbar/ToolBarAtom.tsx";
import Image from "../../atoms/image/ImageAtom.tsx";
import MenuItem from "../../atoms/menuitem/MenuItemAtom.tsx";
import Typography from "../../atoms/typography/TypographyAtom.tsx";
import {IconAtomMenu, IconAtomModeNightRounded, IconAtomWbSunnyRounded} from "../../atoms/icon/IconAtom.tsx";
import Drawer from "../../atoms/drawer/DrawerAtom.tsx";
import Divider from "../../atoms/divider/DividerAtom.tsx";
import {AppBarAtomFixed} from "../../atoms/appbar/AppBarAtom.tsx";
import ButtonAtom from "../../atoms/button/ButtonAtom.tsx";
import logo from './stargaser_logo.svg';

const NavigationBarMolecule = ({mode, toggleColorMode}: AppAppBarProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBarAtomFixed
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <ToolBarAtomNavigation>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Image
                src={logo}
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                  <Button href="/" onClick={() => {
                  }}>
                    <Typography variant="body2" color="text.primary">
                      회사 소개
                    </Typography>
                  </Button>
                </MenuItem>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                  <Button href="/projects" onClick={() => {
                  }}>
                    <Typography variant="body2" color="text.primary">
                      프로젝트
                    </Typography>
                  </Button>
                </MenuItem>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                  <Button href="/admin-chat" onClick={() => {
                  }}>
                    <Typography variant="body2" color="text.primary">
                      관리자와 대화
                    </Typography>
                  </Button>
                </MenuItem>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                  <Button href="/schedule" onClick={() => {
                  }}>
                    <Typography variant="body2" color="text.primary">
                      일정
                    </Typography>
                  </Button>
                </MenuItem>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                  <Button href="/profile" onClick={() => {
                  }}>
                    <Typography variant="body2" color="text.primary">
                      프로필
                    </Typography>
                  </Button>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: {xs: 'none', md: 'flex'},
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
              <Button
                onClick={() => {
                }}
                color="primary"
                variant="text"
                size="small"
                href="/sign-in"
              >
                Sign in
              </Button>
              <Button
                onClick={() => {
                }}
                color="primary"
                variant="contained"
                size="small"
                href="/sign-up"
              >
                Sign up
              </Button>
            </Box>
            <Box sx={{display: {sm: '', md: 'none'}}}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{minWidth: '30px', p: '4px'}}
              >
                <IconAtomMenu/>
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
                  </Box>
                  <MenuItem>
                    <ButtonAtom href="/" onClick={() => {
                    }}>
                      회사 소개
                    </ButtonAtom>
                  </MenuItem>
                  <MenuItem>
                    <ButtonAtom href="/projects" onClick={() => {
                    }}>
                      프로젝트
                    </ButtonAtom>
                  </MenuItem>
                  <MenuItem>
                    <ButtonAtom href="/admin-chat" onClick={() => {
                    }}>
                      관리자와 대화
                    </ButtonAtom>
                  </MenuItem>
                  <MenuItem>
                    <ButtonAtom href="/schedule" onClick={() => {
                    }}>
                      일정
                    </ButtonAtom>
                  </MenuItem>
                  <MenuItem>
                    <ButtonAtom href="/profile" onClick={() => {
                    }}>
                      프로필
                    </ButtonAtom>
                  </MenuItem>
                  <Divider/>
                  <MenuItem>
                    <Button
                      onClick={() => {
                      }}
                      color="primary"
                      variant="contained"
                      href="/sign-up"
                      sx={{width: '100%'}}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      onClick={() => {
                      }}
                      color="primary"
                      variant="outlined"
                      href="/sign-in"
                      sx={{width: '100%'}}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </ToolBarAtomNavigation>
        </Container>
      </AppBarAtomFixed>
    </div>
  );
}

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({mode, toggleColorMode}: ToggleColorModeProps) {
  return (
    <Box sx={{maxWidth: '32px'}}>
      <Button
        variant="text"
        size="small"
        aria-label="button to toggle theme"
        onClick={toggleColorMode}
        sx={{minWidth: '32px', height: '32px', p: '4px'}}
      >
        {mode === 'dark' ? (
          <IconAtomWbSunnyRounded/>
        ) : (
          <IconAtomModeNightRounded/>
        )}
      </Button>
    </Box>
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

export default NavigationBarMolecule;
