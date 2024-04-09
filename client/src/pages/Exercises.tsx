import ContentContainer from "../components/ui/ContentContainer";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TYPES, MUSCLES, DIFFICULTIES } from "../constants";
import Card from "../components/exercises/Card";
import { Exercise } from "../types";
import { Formik, Form } from "formik";
import Dropdown from "../components/exercises/Dropdown";
import axios from 'axios';
import PageHeader from "../components/ui/PageHeader";
import { formatInputValue, constructURL } from "../utils/fn";

const Message: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      variant='h5'
      sx={{
        alignSelf: 'center',
        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
      }}
    >
      {children}
    </Typography>
  );
}

const Exercises = () => {
  const [exerciseList, setExerciseList] = useState<Exercise[] | null>(null);

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
        display='flex'
        flexDirection='column'
        gap='1.75rem'
      >
        {exerciseList ?
          exerciseList.length > 0 ?
            exerciseList.map((exercise, index) => <Card key={index} exercise={exercise} />) :
            <Message>Search returned no results...</Message> :
          <Message>Search to get started</Message>
        }
      </Box>
    </ContentContainer>
  );
}

export default Exercises;