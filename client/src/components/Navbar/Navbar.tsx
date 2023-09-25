import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "./Logo";
import UserTools from "./UserTools";
import PageNavigation from "./PageNavigation";

const Navbar = () => {
  return (
    <AppBar
      position='static'
      sx={{
        paddingY: '1rem',
        paddingX: { sm: '1rem', md: '2rem', lg: '8rem' }
      }}
    >
      <Toolbar>
        <Logo />
        <PageNavigation />
        <UserTools />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;