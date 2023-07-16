import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import Metric from './Metric';

const CalculatorTabs = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '60%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Metric" />
          <Tab label="Imperial" />
        </Tabs>
      </Box>
      <Metric value={value} index={0} />
    </Box>
  );
}

export default CalculatorTabs;