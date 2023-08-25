import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DataObj {
  label: string;
  info: string | number | null;
};

type Props = {
  data: DataObj[];
};

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
          <Typography
            display='inline'
            mr='1.5rem'
            fontSize='1.125rem'
          >
            {obj.label}
          </Typography>
          <Typography display='inline' fontSize='1.5rem'>
            {obj.info ? obj.info : 'N/A'}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default UserInfoColumn;