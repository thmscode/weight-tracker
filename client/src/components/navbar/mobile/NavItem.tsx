import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

type Props = {
  label: string;
  link: string;
}

const NavItem: React.FC<Props> = ({ label, link }) => {
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

export default NavItem;