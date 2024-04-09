import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

interface DataObj {
  label: string;
  info: string | number | null;
};

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      display='inline'
      sx={{
        mr: { xs: '0.5rem', sm: '0.75rem' },
        fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' }
      }}
    >
      {children}:
    </Typography>
  );
}

const Value: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      display='inline'
      sx={{ fontSize: { xs: '1.125rem', md: '1.3rem', lg: '1.5rem' } }}
    >
      {children}
    </Typography>
  );
}

const UserInfoColumn: React.FC<{ data: DataObj[] }> = ({ data }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      sx={{ alignSelf: { sm: 'center' }, gap: { xs: '0.25rem', sm: '0.5rem' } }}
    >
      {data.map((obj, index) =>
        <Box key={index}>
          <Label>{obj.label}</Label>
          <Value>{obj.info ? obj.info : 'N/A'}</Value>
        </Box>
      )}
    </Box>
  );
}

export default UserInfoColumn;