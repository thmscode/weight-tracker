import { useState } from 'react';
import { Box } from '@mui/material';
import UserBMI from './UserBMI';
import Chart from './Chart';
import MetricCalculator from '../Forms/MetricCalculator';
import ImperialCalculator from '../Forms/ImperialCalculator';

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
          <Chart />
        </Box>
      )}
    </Box>
  );
}

export default Calculator;