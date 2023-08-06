import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "./Logo";
import Actions from "./Actions";
import NavRoutes from "./NavRoutes";

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ py: 1, px: 24 }}>
      <Toolbar>
        <Logo />
        <NavRoutes />
        <Actions />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;