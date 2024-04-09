import { ModalAction, ModalState } from "../types";
import { REDUCER_ACTION_TYPES } from "../constants";

// Reducer function that gets used by EntriesTable.tsx
export const reducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.OPEN_DELETE:
      return {
        data: action.payload,
        openDeleteModal: true,
        openEditModal: false,
      };
    case REDUCER_ACTION_TYPES.CLOSE_DELETE:
      return {
        data: action.payload,
        openDeleteModal: false,
        openEditModal: false,
      };
    case REDUCER_ACTION_TYPES.OPEN_EDIT:
      return {
        data: action.payload,
        openDeleteModal: false,
        openEditModal: true,
      };
    case REDUCER_ACTION_TYPES.CLOSE_EDIT:
      return {
        data: action.payload,
        openDeleteModal: false,
        openEditModal: false,
      };
  }
  throw Error("Unknown Action Type:" + action.type);
};
