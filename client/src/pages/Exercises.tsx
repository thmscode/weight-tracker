import ContentContainer from "../components/ContentContainer";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TYPES, MUSCLES, DIFFICULTIES } from "../utils/constants";
import Card from "../components/Exercises/Card";
import { Exercise } from "../utils/types";
import { Formik, Form } from "formik";
import Dropdown from "../components/Exercises/Dropdown";
import axios from 'axios';
import PageHeader from "../components/PageHeader";

const Exercises = () => {
  const [exerciseList, setExerciseList] = useState<Exercise[] | null>(null);

  const formatInputValue = (string: string): string => string.toLowerCase().split(' ').join('_');

  const constructURL = (type: string, muscle: string, difficulty: string): string => {
    const BASE_URL: string = 'https://api.api-ninjas.com/v1/exercises';
    if (type === '' && muscle === '' && difficulty === '') return BASE_URL;
    else {
      const typeParam = type !== '' ? `type=${type}&` : '';
      const muscleParam = muscle !== '' ? `muscle=${muscle}&` : '';
      const difficultyParam = difficulty !== '' ? `difficulty=${difficulty}` : '';
      return BASE_URL + '?' + typeParam + muscleParam + difficultyParam;
    }
  };

  const getExercises = (url: string): void => {
    axios.get(url, { headers: { 'X-Api-Key': process.env.REACT_APP_API_NINJAS_KEY } })
      .then(res => setExerciseList(res.data))
      .catch(e => {
        setExerciseList([]);
        console.error(e);
      });
  };

  return (
    <ContentContainer>
      <PageHeader text='Exercise Search' />
      <Box mb={4} sx={{ display: 'flex' }}>
        <Formik
          initialValues={{
            type: '',
            muscle: '',
            difficulty: ''
          }}
          onSubmit={(values, actions) => {
            const url = constructURL(
              formatInputValue(values.type),
              formatInputValue(values.muscle),
              formatInputValue(values.difficulty)
            );
            getExercises(url);
            actions.setSubmitting(false);
          }}
        >
          <Form className='exercise-form'>
            <Dropdown id='type' label='Exercise Type' options={TYPES} />
            <Dropdown id='muscle' label='Muscle Group' options={MUSCLES} />
            <Dropdown id='difficulty' label='Difficulty' options={DIFFICULTIES} />
            <Button type='submit' variant='contained' sx={{ px: '2rem' }}>Search</Button>
          </Form>
        </Formik>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
          justifyContent: 'center'
        }}
      >
        {exerciseList ?
          exerciseList.length > 0 ?
            exerciseList.map((exercise, index) => <Card key={index} exercise={exercise} />) :
            <Typography variant='h5' sx={{ alignSelf: 'center' }}>Search returned no results...</Typography> :
          <Typography variant='h5' sx={{ alignSelf: 'center' }}>Search to get started</Typography>}
      </Box>
    </ContentContainer>
  );
}

export default Exercises;