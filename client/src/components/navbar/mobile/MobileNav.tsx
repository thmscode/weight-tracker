import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useState } from "react";
import NavDrawer from './NavDrawer';
import Logo from '../Logo';

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => setOpen((prevState) => !prevState);

  return (
    <>
      <AppBar
        component='nav'
        position='static'
        sx={{
          paddingY: '0.75rem',
          paddingX: { sm: '1rem', md: '2rem', lg: '8rem' },
          display: { xs: 'block', sm: 'none' }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute' }}
          >
            <MenuIcon />
          </IconButton>
          <Box position='relative' margin='auto'>
            <Logo />
          </Box>
        </Toolbar>
      </AppBar>
      <NavDrawer open={open} fn={handleDrawerToggle} />
    </>
  );
}

export default MobileNav;