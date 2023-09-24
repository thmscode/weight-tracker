import React from "react";
import ContentContainer from "../components/ContentContainer";
import { Box, Link, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import BMIChart from '../components/bmi/BMIChart';

const SubHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      variant='h5'
      mb={0.5}
      sx={{
        textDecoration: 'underline',
        fontSize: { xs: '1rem', md: '1.25rem', xl: '1.75rem' }
      }}
    >
      {text}
    </Typography>
  );
}

const TextBody: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Typography sx={{ fontSize: { xs: '0.75rem', md: '1rem', xl: '1.25rem' } }}>
      {children}
    </Typography>
  );
}

const Bold: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      component='span'
      fontWeight={600}
      sx={{ fontSize: { xs: '0.75rem', md: '1rem', xl: '1.25rem' } }}
    >
      {children}
    </Typography>
  )
}

const BMI = () => {
  return (
    <ContentContainer>
      <PageHeader text='Body Mass Index (BMI)' />
      <Box mb={3}>
        <SubHeader text='What is BMI?' />
        <TextBody>
          Body Mass Index (BMI) is a value calculated by taking an individual's weight and dividing it by the square of their height. It is widely used to measure how healthy an individual's weight is,
          given their height. Specifically, the value returned by the calculation is used to categorize whether a person is underweight, normal weight, overweight, or obese. However, BMI should not be
          used by bodybuilders, long-distance athletes, pregnant women, the elderly, or young children. This is because BMI does not take into account whether the weight is carried as muscle or fat.
          <Bold> BMI does not diagnose the health of an individual. It is simply a screening tool.</Bold>
        </TextBody>
      </Box>
      <Box mb={3}>
        <SubHeader text='BMI Chart' />
        <BMIChart />
      </Box>
      <Box mb={3}>
        <SubHeader text='Waist Circumference' />
        <TextBody>
          Another way to estimate your potential disease risk is to measure your waist circumference. Excessive abdominal fat may be serious because it places you at greater risk of developing obesity-related
          conditions, such as type 2 diabetes, high blood pressure, and coronary artery disease. Your waistline may be telling you that you have a higher risk of developing obesity-related conditions if you are:
          (1) a man whose waist circumference is more than 40 inches; or (2) a non-pregnant woman whose waist circumference is more than 35 inches. <Bold>Waist circumference does not diagnose the health of an individual either. It is also simply a screening tool.</Bold>
        </TextBody>
      </Box>
      <Box mb={3}>
        <SubHeader text='Importance of a Healthy Weight' />
        <TextBody>
          Maintaining a healthy weight is important for overall health and can help you prevent and control many diseases and conditions. If you are overweight or obese, you are at a higher risk of developing
          serious health problems, including heart disease, high blood pressure, type 2 diabetes, breathing problems, and certain cancers. By maintaining a healthy weight, you lower your risk of developing
          the aforementioned problems and gives you more energy to enjoy life.
        </TextBody>
      </Box>
      <Box mb={3}>
        <SubHeader text='Managing Your Weight' />
        <TextBody>
          A healthy weight is not about following a diet or program. Instead, it involves a lifestyle with healthy eating patterns, regular physical activity, and stress management. People with gradual, steady
          weight loss (about 1 to 2 pounds per week) are more likely to keep the weight off than people who lose weight quickly. To start, try incorporating some daily physical activity, such as going for 15-30
          minute walks every day (at a moderate pace) and improving your eating habits over time. Making sudden, radical changes may lead to short-term weight loss, but radical changes are neither healthy nor a
          good idea. To avoid doing so, be patient, set long-term goals, and be kind to yourself.
        </TextBody>
      </Box>
      <Box mb={3}>
        <SubHeader text='Importance of Physical Activity' />
        <TextBody>
          Being physically active and eating fewer calories will help you lose weight and keep it off over time. While people vary in the amount of physical activity they need for weight control, many can
          maintain their weight by doing 150 to 300 minutes (2.5 to 5 hours) of moderate-intensity physical activity every week. However, people who want to lose more weight and keep it off may need to be physically
          active for more than 300 minutes (5 hours) per week.
        </TextBody>
      </Box>
      <Box mb={3}>
        <SubHeader text='Sources' />
        <TextBody>
          <Link href='https://www.cdc.gov/healthyweight/index.html'>Centre for Disease Control and Prevention</Link> & <Link href='https://www.nhlbi.nih.gov/health/educational/lose_wt/index.htm'>National Heart, Lung, and Blood Institute</Link>
        </TextBody>
      </Box>
    </ContentContainer>
  );
}

export default BMI;