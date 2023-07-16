import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import Metric from './Metric';
import Imperial from './Imperial';

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
      <Imperial value={value} index={1} />
    </Box>
  );
}

export default CalculatorTabs;