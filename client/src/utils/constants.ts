import { IOption } from "./types";

// Navbar
export const NAV_ROUTES: IOption[] = [
  { name: 'BMI', value: '/bmi' },
  { name: 'EXERCISES', value: '/exercises' }
];
export const UNAUTH_ROUTES: IOption[] = [
  { name: 'LOGIN', value: '/login' },
  { name: 'SIGNUP', value: '/signup' }
];

// BMI Page - BMIChart.tsx
export const HEADERS: string[] = ['Classification', 'BMI'];
export const CATEGORIES: IOption[] = [
  { name: 'Underweight', value: '<18.5' },
  { name: 'Normal Weight', value: '18.5 - 24.9' },
  { name: 'Overweight', value: '25.0 - 29.9' },
  { name: 'Obesity', value: '≥30.0' }
];

// Workouts Page
export const TYPE_OPTIONS: IOption[] = [
  { name: 'Cardio', value: 'cardio' },
  { name: 'Olympic Weightlifting', value: 'olympic_weightlifting' },
  { name: 'Plyometrics', value: 'plyometrics' },
  { name: 'Powerlifting', value: 'powerlifting' },
  { name: 'Strength', value: 'strength' },
  { name: 'Stretching', value: 'stretching' },
  { name: 'Strongman', value: 'strongman' }
];
export const MUSCLE_OPTIONS: IOption[] = [
  { name: 'Abdominals', value: 'abdominals' },
  { name: 'Abductors', value: 'abductors' },
  { name: 'Adductors', value: 'adductors' },
  { name: 'Biceps', value: 'biceps' },
  { name: 'Calves', value: 'calves' },
  { name: 'Chest', value: 'chest' },
  { name: 'Forearms', value: 'forearms' },
  { name: 'Glutes', value: 'glutes' },
  { name: 'Hamstrings', value: 'hamstrings' },
  { name: 'Lats', value: 'lats' },
  { name: 'Lower Back', value: 'lower_back' },
  { name: 'Middle Back', value: 'middle_back' },
  { name: 'Neck', value: 'neck' },
  { name: 'Quadriceps', value: 'quadriceps' },
  { name: 'Traps', value: 'traps' },
  { name: 'Triceps', value: 'triceps' }
];
export const DIFFICULTY_OPTIONS: IOption[] = [
  { name: 'Beginner', value: 'beginner' },
  { name: 'Intermediate', value: 'intermediate' },
  { name: 'Expert', value: 'expert' }
];