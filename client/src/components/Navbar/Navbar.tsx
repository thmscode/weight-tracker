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
        py: 1,
        px: 24
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