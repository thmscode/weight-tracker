import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { HEADERS, CATEGORIES } from '../../constants';

const Chart = () => {
  return (
    <Box>
      <Table size='medium'>
        <TableHead>
          <TableRow>
            {HEADERS.map((header, index) => <TableCell key={index}>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {CATEGORIES.map((category, index) => (
            <TableRow key={index}>
              <TableCell key={index * 2 - 1}>{category.name}</TableCell>
              <TableCell key={index * 2}>{category.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Chart;