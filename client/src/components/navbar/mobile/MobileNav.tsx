import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { AppBar, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { MOBILE_NAV_ROUTES } from '../../../utils/constants';

const NavLink: React.FC<{ label: string, link: string }> = ({ label, link }) => {
  return (
    <ListItem
      disablePadding
      component={Link}
      href={link}
    >
      <ListItemButton sx={{ textAlign: 'center' }}>
        <ListItemText
          disableTypography
          primary={label}
          sx={{
            color: 'black',
            letterSpacing: '0.1rem',
            fontSize: '0.9rem',
            textTransform: 'uppercase'
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

const AuthLink: React.FC<{ label: string, fn: () => void }> = ({ label, fn }) => {
  return (
    <ListItem
      disablePadding
      component={Link}
    >
      <ListItemButton onClick={fn} sx={{ textAlign: 'center' }}>
        <ListItemText
          disableTypography
          primary={label}
          sx={{
            color: 'black',
            letterSpacing: '0.1rem',
            fontSize: '0.9rem',
            textTransform: 'uppercase'
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

const Unauth = () => {
  const { loginWithRedirect } = useAuth0();
  return <AuthLink key='login' label='Login' fn={() => loginWithRedirect()} />
}

const Auth = () => {
  const { logout } = useAuth0();
  return (
    <>
      <NavLink key='dashboard' label='dashboard' link='/dashboard' />
      <AuthLink key='logout' label='logout' fn={() => logout({ logoutParams: { returnTo: window.location.origin } })} />
    </>
  );
}


const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { isAuthenticated } = useAuth0();

  const handleDrawerToggle = () => setOpen((prevState) => !prevState);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TRACKER
      </Typography>
      <Divider />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <List>
          {MOBILE_NAV_ROUTES.map(route => (
            <NavLink key={route.name} label={route.name} link={route.value} />
          ))}
          {isAuthenticated ? Auth() : Unauth()}
        </List>
      </Box>
    </Box>
  )

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
      <nav>
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default MobileNav;