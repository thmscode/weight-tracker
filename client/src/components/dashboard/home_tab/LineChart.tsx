import { Box, Typography } from '@mui/material';
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { FormattedEntry } from '../../../utils/types';

Chart.register(...registerables);

const LineChart: React.FC<{ data: FormattedEntry[] }> = ({ data }) => {
  const getMin = (data: FormattedEntry[]) => parseInt(data.reduce((prev, curr) => prev.weight < curr.weight ? prev : curr).weight);
  const getMax = (data: FormattedEntry[]) => parseInt(data.reduce((prev, curr) => prev.weight > curr.weight ? prev : curr).weight);

  return (
    <Box sx={{ minWidth: { xs: '100%', md: '75%' } }}>
      <Typography
        variant='h6'
        marginBottom='0.5rem'
        sx={{
          textDecoration: 'underline',
          fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
        }}
      >
        Weight Over Time
      </Typography>
      {data && <Line data={{
        labels: data.map((entry) => entry.date),
        datasets: [
          {
            label: "Weight vs. Date",
            data: data.map((entry) => entry.weight),
          }
        ]
      }}
        options={{
          scales: {
            y: {
              min: (data.length > 0 ? getMin(data) - 3 : 0),
              max: (data.length > 0 ? getMax(data) + 3 : 10)
            }
          }
        }}
      />}
    </Box>
  );
}

export default LineChart;