// Constants.ts, src/components/Exercises/Details.tsx
export interface NameValueObj {
  name: string;
  value: string,
};

// Exercises Page
export type Exercise = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};

// Dashboard Page
export type Entry = {
  date: Date;
  weight: number;
};

export type UserObj = {
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  id: string;
  weight: null | number;
  height: null | number;
  bmi: null | number;
  weight_entries: Entry[];
};

export type TabProps = {
  value: number;
  index: number;
};

export type FormattedEntry = {
  date: string,
  weight: string
};

export type ModalState = {
  data: Entry | null,
  openDeleteModal: boolean,
  openEditModal: boolean
};

export type ModalAction = {
  type: string,
  payload: Entry | null
};

export type HistoryModalProps = {
  open: boolean;
  data: Entry | null;
  handleClose: () => void;
};