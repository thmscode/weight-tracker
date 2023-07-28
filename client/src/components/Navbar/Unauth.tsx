import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { UNAUTH_ROUTES } from '../../utils/constants';

const Unauth = () => {
  return (
    <Stack direction='row' spacing={3}>
      {UNAUTH_ROUTES.map((route, index) => (
        <Button
          key={index}
          href={route.value}
          sx={{
            color: 'inherit',
            fontSize: '1.125rem',
            letterSpacing: '0.1rem'
          }}
        >
          {route.name}
        </Button>
      ))}
    </Stack>
  );
}

export default Unauth;