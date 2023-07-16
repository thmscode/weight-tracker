import { useState } from 'react';
import Box from '@mui/material/Box';
import UserBMI from './UserBMI';
import BMIChart from './BMIChart';
import MetricForm from './MetricForm';
import ImperialForm from './ImperialForm';

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {value === 0 ?
            <MetricForm handler={handleSubmission} /> :
            <ImperialForm handler={handleSubmission} />}
          <UserBMI bmi={bmi} />
          <BMIChart />
        </Box>
      )}
    </Box>
  );
}

export default Calculator;