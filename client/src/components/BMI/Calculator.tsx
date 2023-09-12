import { useState } from 'react';
import { Box } from '@mui/material';
import UserBMI from './UserBMI';
import BMIChart from './BMIChart';
import MetricCalculator from './MetricCalculator';
import ImperialCalculator from './ImperialCalculator';

type Props = {
  value: number;
  index: number;
};

const Calculator: React.FC<Props> = ({ value, index }) => {
  const [bmi, setBMI] = useState<number | null>(null);

  const handleSubmission = (bmi: number): void => setBMI(bmi);

  return (
    <Box hidden={value !== index}>
      {value === index && (
        <Box display='flex' justifyContent='space-between'>
          {value === 0 ?
            <MetricCalculator handler={handleSubmission} /> :
            <ImperialCalculator handler={handleSubmission} />}
          <UserBMI bmi={bmi} />
          <BMIChart />
        </Box>
      )}
    </Box>
  );
}

export default Calculator;