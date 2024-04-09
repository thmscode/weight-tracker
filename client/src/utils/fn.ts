import { ModalAction, ModalState } from "../types";
import { REDUCER_ACTION_TYPES } from "../constants";

/*
  Function that turns a date string and converts it into an array
  ie. Input - '2023-09-27' | Output - [2023, 08, 27]

  Used In: NewEntryModal.tsx, EditEntryModal.tsx, DeleteModal.tsx
  Note: Month value has 1 subtracted from it because the Month property of Date objects are 0-indexed
*/
export const getDateArray = (date: string): number[] => date.split('-').map((x, i) => i === 1 ? parseInt(x) - 1 : parseInt(x));

// Reducer function that gets used by EntriesTable.tsx
export const reducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.OPEN_DELETE: {
      return {
        data: action.payload,
        openDeleteModal: true,
        openEditModal: false
      };
    };
    case REDUCER_ACTION_TYPES.CLOSE_DELETE: {
      return {
        data: action.payload,
        openDeleteModal: false,
        openEditModal: false
      };
    };
    case REDUCER_ACTION_TYPES.OPEN_EDIT: {
      return {
        data: action.payload,
        openDeleteModal: false,
        openEditModal: true
      };
    };
    case REDUCER_ACTION_TYPES.CLOSE_EDIT: {
      return {
        data: action.payload,
        openDeleteModal: false,
        openEditModal: false
      };
    };
  }
  throw Error('Unknown Action Type:' + action.type);
};