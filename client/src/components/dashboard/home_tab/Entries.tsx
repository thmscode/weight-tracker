import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(...registerables);

type Entry = {
  date: Date,
  weight: Number
};

type FormattedEntry = {
  date: string,
  weight: string
};

const formatEntries = (entries: Entry[]): FormattedEntry[] => {
  const format = entries.map(entry => {
    return {
      date: new Date(entry.date).toISOString().split('T')[0].toString(),
      weight: entry.weight.toString()
    }
  });
  return format;
};

const getRecentEntries = (entries: Entry[]): FormattedEntry[] => {
  const data = formatEntries(entries);

  if (data.length <= 8) return data;
  else {
    const recent = [];
    for (let i = data.length - 1; i > data.length - 1 - 8; i--) {
      recent.push(data[i]);
    }
    return recent;
  }
};

const Entries: React.FC<{ weightEntries: Entry[] }> = ({ weightEntries }) => {
  const [chartData, setChartData] = useState<FormattedEntry[] | null>(null);
  const [recentData, setRecentData] = useState<FormattedEntry[] | null>(null);

  useEffect(() => {
    setRecentData(getRecentEntries(weightEntries));
    setChartData(formatEntries(weightEntries));
  }, [weightEntries]);

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      px='1rem'
      my='2rem'
    >


      {/* CHARTJS */}
      <Box minWidth='80%'>
        <Typography variant='h6'>Weight Over Time</Typography>
        {chartData && <Line data={{
          labels: chartData.map((data) => data.date),
          datasets: [
            {
              label: "Weight vs. Date",
              data: chartData.map((data) => data.weight),
            }
          ]
        }}
          options={{
            scales: {
              y: {
                min: parseInt((chartData.reduce((prev, curr) => prev.weight < curr.weight ? prev : curr)).weight) - 3,
                max: parseInt((chartData.reduce((prev, curr) => prev.weight > curr.weight ? prev : curr)).weight) + 3
              }
            }
          }}
        />}
      </Box>


      {/* RECENT ENTRIES */}
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
            {recentData && <TableBody>
              {recentData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell align='left'>{entry.date}</TableCell>
                  <TableCell align='right'>{entry.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Entries;