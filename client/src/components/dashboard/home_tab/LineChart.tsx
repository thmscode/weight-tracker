import { Box, Typography } from '@mui/material';
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { FormattedEntry } from '../../../utils/types';

Chart.register(...registerables);

const LineChart: React.FC<{ data: FormattedEntry[] }> = ({ data }) => {
  return (
    <Box minWidth='80%'>
      <Typography variant='h6'>Weight Over Time</Typography>
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
              min: parseInt((data.reduce((prev, curr) => prev.weight < curr.weight ? prev : curr)).weight) - 3,
              max: parseInt((data.reduce((prev, curr) => prev.weight > curr.weight ? prev : curr)).weight) + 3
            }
          }
        }}
      />}
    </Box>
  );
}

export default LineChart;