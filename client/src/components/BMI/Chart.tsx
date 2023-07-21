import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { HEADERS, CATEGORIES } from '../../utils/constants';

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