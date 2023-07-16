import ContentContainer from "../../components/ContentContainer";
import { Box, Link, Typography } from "@mui/material";
import SubHeader from "./SubHeader";
import CalculatorTabs from "./CalculatorTabs";

const BMI = () => {
  return (
    <ContentContainer>
      <Typography variant='h4' mb={3}>Body Mass Index (BMI)</Typography>
      <Box mb={3}>
        <SubHeader text='What is BMI?' />
        <Typography paragraph={true}>
          Body Mass Index (BMI) is a value calculated by taking an individual's weight in kilograms (or pounds) and dividing it by the square of their height in meters (or feet).
          It is widely used to measure how healthy an individual's weight is, given their height. Specifically, the value returned by the calculation is used to categorize whether a person is under-weight,
          normal weight, over-weight, or obese. However, BMI should not be used by bodybuilders, long-distance athletes, pregnant woment, the elderly, or young children. This is because
          BMI does not take into account whether the weight is carried as muscle or fat.
          <Typography component='span' sx={{ fontWeight: 600, display: "inline" }}> BMI does not diagnose the health of an individual. It is simply a screening tool.</Typography>
        </Typography>
      </Box>
      <Box mb={3}>
        <SubHeader text='Waist Circumference' />
        <Typography paragraph={true}>
          Another way to estimate your potential disease risk is to measure your waist circumference. Excessive abdominal fat may be serious because it places you at greater risk for developing obesity-related
          conditions, such as Type 2 Diabetes, high blood pressure, and coronary artery disease. You waistline may be telling you that you have a higher risk of developing obesity-related conditions if you are:
          (1) A man whose waist circumference is more than 40 inches, or (2) A non-pregnant woman whose waist circumference is more than 35 inches.
          <Typography component='span' sx={{ fontWeight: 600, display: "inline" }}> Waist circumference does not diagnose the health of an individual either. It is also simply a screening tool.</Typography>
        </Typography>
      </Box>
      <Box mb={3}>
        <SubHeader text='BMI Calculator' />
        <CalculatorTabs />
      </Box>
      <Box mb={3}>
        <SubHeader text='Importance of a Healthy Weight' />
        <Typography paragraph={true}>
          Maintaining a healthy weight is important for overall health and can help you prevent and control many diseases and conditions. If you are overweight or obese, you are at a higher disk of developing
          serious health problems, including heart disease, high blood pressure, type 2 diabetes, breathing problems, and certain cancers. By maintaining a healthy weight, you lower your risk of developing
          the aforementioned problems, and gives you more energy to enjoy life.
        </Typography>
      </Box>
      <Box mb={3}>
        <SubHeader text='Managing Your Weight' />
        <Typography paragraph={true}>
          Healthy weight is not about following a diet or program. Instead, it involves a lifestyle with healthy eating patterns, regular physical activity, and stress management. People with gradual, steady
          weight loss (about 1 to 2 pounds per week) are more likely to keep the weight off than people who lose weight quickly. To start, try incorporating some daily physical activity such as going for 15-30
          minute walks every day (at a moderate pace), and improving your eating habits over time. Making sudden, radical changes may lead to short term weight loss, but radical changes are neither healthy nor a
          good idea. To avoid doing so, be patient, set long-term goals, and be kind to yourself.
        </Typography>
      </Box>
      <Box mb={3}>
        <SubHeader text='Importance of Physical Activity' />
        <Typography paragraph={true}>
          Being physically active and eating fewer calories will help you lose weight and keep the weight off over time. While people vary in the amount of physical activity they need for weight control, many can
          maintain their weight by doing 150 to 300 minutes (2.5 to 5 hours) of moderate-intensity physical activity every week. However, people who want to lose more weight and keep it off may need to be physically
          active for more than 300 minutes (5 hours) per week.
        </Typography>
      </Box>
      <Box mb={3} sx={{ whiteSpace: 'pre-wrap' }}>
        <SubHeader text='Sources' />
        <Typography paragraph={true}>
          <Link underline='always' href='https://www.cdc.gov/healthyweight/index.html'>Centre for Disease Control and Prevention</Link> & <Link underline='always' href='https://www.nhlbi.nih.gov/health/educational/lose_wt/index.htm'>National Heart, Lung, and Blood Institute</Link>
        </Typography>
      </Box>
    </ContentContainer>
  );
}

export default BMI;