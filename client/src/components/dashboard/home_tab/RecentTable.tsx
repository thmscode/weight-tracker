import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { FormattedEntry } from '../../../utils/types';

type Props = {
  data: FormattedEntry[];
  handleOpen: () => void;
}

const RecentTable: React.FC<Props> = ({ data, handleOpen }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      sx={{ minWidth: { xs: '100%', md: '25%' } }}>
      <Typography
        variant='h6'
        marginBottom='0.5rem'
        sx={{
          textDecoration: 'underline',
          fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
        }}
      >
        Recent Entries
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Date</TableCell>
              <TableCell align='right'>Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ?
              data.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell align='left'>{entry.date}</TableCell>
                  <TableCell align='right'>{entry.weight} lbs</TableCell>
                </TableRow>
              )) :
              <Typography mt='0.5rem'>No data yet!</Typography>}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant='contained'
        sx={{ alignSelf: 'center', mt: { xs: '1rem', lg: '1.5rem' } }}
        onClick={handleOpen}
      >
        Add New Entry
      </Button>
    </Box>
  );
}

export default RecentTable;