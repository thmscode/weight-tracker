import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import RecentTable from './RecentTable';
import LineChart from './LineChart';
import { Entry, FormattedEntry } from '../../../types';
import NewEntryModal from './NewEntryModal';
import { formatEntries, getRecentEntries } from '../../../utils/fn';

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
      sx={{
        paddingX: { lg: '1rem' },
        marginY: { xs: '1rem', sm: '2rem' },
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '1rem', md: '0rem' },
        justifyContent: { md: 'space-between' }
      }}
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