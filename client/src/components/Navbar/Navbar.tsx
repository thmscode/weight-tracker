import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "./Logo";
import Unauth from "./Unauth";
import NavRoutes from "./NavRoutes";

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ py: 1, px: 24 }}>
      <Toolbar>
        <Logo />
        <NavRoutes />
        <Unauth />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;