import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useAuth0 } from "@auth0/auth0-react";
import { MOBILE_NAV_ROUTES } from "../../../../constants";
import NavItem from "./NavItem";
import AuthItem from "./AuthItem";

const NavDrawer: React.FC<{ open: boolean; fn: () => void }> = ({ open, fn }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const drawer = (
    <Box onClick={fn} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TRACKER
      </Typography>
      <Divider />
      <Box display="flex" flexDirection="column" alignItems="center">
        <List>
          {MOBILE_NAV_ROUTES.map((route) => (
            <NavItem key={route.name} label={route.name} link={route.value} />
          ))}
          {isAuthenticated ? (
            <>
              <NavItem key="dashboard" label="dashboard" link="/dashboard" />
              <AuthItem
                key="logout"
                label="logout"
                fn={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              />
            </>
          ) : (
            <AuthItem
              key="login"
              label="Login"
              fn={() => loginWithRedirect()}
            />
          )}
        </List>
      </Box>
    </Box>
  );
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={open}
        onClose={fn}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "50%" },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default NavDrawer;
