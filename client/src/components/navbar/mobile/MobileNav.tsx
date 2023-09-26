import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useState } from "react";
import NavDrawer from './NavDrawer';

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
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavDrawer open={open} fn={handleDrawerToggle} />
    </>
  );
}

export default MobileNav;