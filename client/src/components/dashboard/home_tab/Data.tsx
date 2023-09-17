import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import RecentTable from './RecentTable';
import LineChart from './LineChart';
import { Entry, FormattedEntry } from '../../../utils/types';
import NewEntryModal from './NewEntryModal';

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

const Data: React.FC<{ weightEntries: Entry[] }> = ({ weightEntries }) => {
  const [chartData, setChartData] = useState<FormattedEntry[] | null>(null);
  const [recentData, setRecentData] = useState<FormattedEntry[] | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

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
      {chartData && <LineChart data={chartData} />}
      {recentData && <RecentTable data={recentData} handleOpen={handleOpen} />}
      <NewEntryModal
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
}

export default Data;