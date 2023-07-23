import { NameValueObj } from "./types";

// Navbar
export const NAV_ROUTES: NameValueObj[] = [
  { name: 'BMI', value: '/bmi' },
  { name: 'EXERCISES', value: '/exercises' }
];
export const UNAUTH_ROUTES: NameValueObj[] = [
  { name: 'LOGIN', value: '/login' },
  { name: 'SIGNUP', value: '/signup' }
];

// BMI Page - BMIChart.tsx
export const HEADERS: string[] = ['Classification', 'BMI'];
export const CATEGORIES: NameValueObj[] = [
  { name: 'Underweight', value: '<18.5' },
  { name: 'Normal Weight', value: '18.5 - 24.9' },
  { name: 'Overweight', value: '25.0 - 29.9' },
  { name: 'Obesity', value: '≥30.0' }
];

// Workouts Page
export const TYPES: string[] = [
  'Cardio',
  'Olympic Weightlifting',
  'Plyometrics',
  'Powerlifting',
  'Strength',
  'Stretching',
  'Strongman',
];

export const MUSCLES: string[] = [
  'Abdominals',
  'Abductors',
  'Adductors',
  'Biceps',
  'Calves',
  'Chest',
  'Forearms',
  'Glutes',
  'Hamstrings',
  'Lats',
  'Lower Back',
  'Middle Back',
  'Neck',
  'Quadriceps',
  'Traps',
  'Triceps'
];

export const DIFFICULTIES: string[] = [
  'Beginner',
  'Intermediate',
  'Expert'
];