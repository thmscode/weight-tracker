import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DataObj {
  label: string;
  info: string | number | null;
};

type Props = {
  data: DataObj[];
};

const Label: React.FC<{ string: string }> = ({ string }) => {
  return (
    <Typography
      display='inline'
      mr='1.5rem'
      fontSize='1.125rem'
    >
      {string}
    </Typography>
  );
}

const Info: React.FC<{ string: string | number | null }> = ({ string }) => {
  return (
    <Typography display='inline' fontSize='1.5rem'>
      {string ? string : 'N/A'}
    </Typography>
  );
}

const UserInfoColumn: React.FC<Props> = ({ data }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='1rem'
      alignSelf='center'
    >
      {data.map((obj, index) =>
        <Box key={index}>
          <Label string={obj.label} />
          <Info string={obj.info} />
        </Box>
      )}
    </Box>
  );
}

export default UserInfoColumn;