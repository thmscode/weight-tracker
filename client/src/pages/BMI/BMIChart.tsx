import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const HEADERS = ['Classification', 'BMI'];
const CATEGORIES = [
  { class: 'Underweight', value: '<18.5' },
  { class: 'Normal Weight', value: '18.5 - 24.9' },
  { class: 'Overweight', value: '25.0 - 29.9' },
  { class: 'Obesity', value: '≥30.0' }
]

const BMIChart = () => {
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
              <TableCell key={index * 2 - 1}>{category.class}</TableCell>
              <TableCell key={index * 2}>{category.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default BMIChart;