import { NameValueObj, ModalState } from "./types";

// Navbar
export const NAV_ROUTES: NameValueObj[] = [
  { name: 'bmi', value: '/bmi' },
  { name: 'exercises', value: '/exercises' }
];

export const MOBILE_NAV_ROUTES: NameValueObj[] = [
  { name: 'home', value: '/' },
  { name: 'bmi', value: '/bmi' },
  { name: 'exercises', value: '/exercises' }
];

// BMI Page
export const HEADERS: string[] = ['Classification', 'BMI'];

export const CATEGORIES: NameValueObj[] = [
  { name: 'Underweight', value: '<18.5' },
  { name: 'Normal Weight', value: '18.5 - 24.9' },
  { name: 'Overweight', value: '25.0 - 29.9' },
  { name: 'Obese', value: '≥30.0' }
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

// Homepage
export const HERO_HEADER: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

export const HERO_TEXT: string = 'Et repellat dignissimos, mollitia quidem illum quod sapiente eos qui nisi minima. Omnis sequi nobis facere voluptas ad fugiat explicabo sed alias! Tempora aperiam optio quo reiciendis error velit dolores ad.';

export const HOMEPAGE_BLURBS: NameValueObj[] = [
  {
    name: 'A Stress-Free Approach to Weight Loss.',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur ratione reiciendis quo et nesciunt quam, vitae voluptates veniam iste consequatur suscipit possimus labore animi voluptatibus. Odit ratione porro placeat? Dolore, vel. Omnis non quod sunt, nostrum eos illo delectus.'
  },
  {
    name: 'Track Your Weight. How You Want. When You Want.',
    value: 'Morbi tincidunt tempus nunc, at suscipit lacus semper at. Suspendisse malesuada augue ut metus lacinia, ut ultrices lorem faucibus. Aliquam pretium tempus ultrices. Nullam ac dignissim leo. Aliquam euismod eu diam in tempus. Nulla in felis erat. Sed tincidunt facilisis elit sed pellentesque.'
  },
  {
    name: 'Simplicity At Its Finest.',
    value: 'In tristique lacus non rhoncus suscipit. Nulla lorem nisl, eleifend eu sapien in, interdum lobortis mi. Duis augue magna, eleifend ullamcorper ornare at, gravida nec turpis. Nullam varius nisi et pulvinar fermentum. Morbi quis facilisis risus.'
  }
];

// Error Page
export const STATUS_CODES: NameValueObj[] = [
  {
    name: '400',
    value: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400'
  },
  {
    name: '401',
    value: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401'
  },
  {
    name: '403',
    value: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403'
  },
  {
    name: '404',
    value: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404'
  },
  {
    name: '500',
    value: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500'
  },
  {
    name: 'list',
    value: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
  }
];

// Dashboard (History)
export const INITIAL_REDUCER_STATE: ModalState = {
  data: null,
  openDeleteModal: false,
  openEditModal: false,
};

export const REDUCER_ACTION_TYPES = {
  OPEN_DELETE: 'OPEN_DELETE_MODAL',
  CLOSE_DELETE: 'CLOSE_DELETE_MODAL',
  OPEN_EDIT: 'OPEN_EDIT_MODAL',
  CLOSE_EDIT: 'CLOSE_EDIT_MODAL'
};