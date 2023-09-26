import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "./Logo";
import UserTools from "./UserTools";
import PageNavigation from "./PageNavigation";
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <>
      <AppBar
        component='nav'
        position='static'
        sx={{
          paddingY: '1rem',
          paddingX: { sm: '1rem', md: '2rem', lg: '8rem' },
          display: { xs: 'none', sm: 'block' }
        }}
      >
        <Toolbar>
          <Logo />
          <PageNavigation />
          <UserTools />
        </Toolbar>
      </AppBar>
      <MobileNav />
    </>
  );
}

export default Navbar;