import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { FormattedEntry } from '../../../utils/types';

const RecentTable: React.FC<{ data: FormattedEntry[] }> = ({ data }) => {
  return (
    <Box>
      <Typography variant='h6'>Recent Entries</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Weight (lbs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ?
              data.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell align='left'>{entry.date}</TableCell>
                  <TableCell align='right'>{entry.weight}</TableCell>
                </TableRow>
              )) :
              <Typography mt='0.5rem'>No data yet!</Typography>}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default RecentTable;