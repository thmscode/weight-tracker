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
          {data && <TableBody>
            {data.map((entry, index) => (
              <TableRow key={index}>
                <TableCell align='left'>{entry.date}</TableCell>
                <TableCell align='right'>{entry.weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>}
        </Table>
      </TableContainer>
    </Box>
  );
}

export default RecentTable;