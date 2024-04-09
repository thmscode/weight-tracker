import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../Logo";
import Controls from "./Controls";
import Navigation from "./Navigation";

const DesktopNavbar = () => {
  return (
    <AppBar
      component="nav"
      position="static"
      sx={{
        paddingY: "1rem",
        paddingX: { sm: "1rem", md: "2rem", lg: "8rem" },
        display: { xs: "none", sm: "block" },
      }}
    >
      <Toolbar>
        <Logo />
        <Navigation />
        <Controls />
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
