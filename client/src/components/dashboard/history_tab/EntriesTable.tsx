import { useState, useReducer } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { Entry } from "../../../utils/types";
import { CustomTablePagination } from "./CustomTablePagination";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import { INITIAL_REDUCER_STATE, REDUCER_ACTION_TYPES } from "../../../utils/constants";
import { reducer } from "../../../utils/fn";

type Align = "center" | "left" | "right" | "justify" | "inherit" | undefined;

const Cell: React.FC<{ placement: Align, text: string }> = ({ placement, text }) =>
  <TableCell align={placement} sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.25rem' } }}>{text}</TableCell>

const EntriesTable: React.FC<{ entries: Entry[] }> = ({ entries }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [modalState, setModalState] = useReducer(reducer, INITIAL_REDUCER_STATE);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box py='1rem'>
        <Table>
          <TableHead>
            <TableRow>
              <Cell placement='left' text='Date' />
              <Cell placement='center' text='Weight' />
              <Cell placement='right' text='Actions' />
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? entries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : entries
            ).map((entry, index) => (
              <TableRow key={index}>
                <Cell placement='left' text={entry.date.toString()} />
                <Cell placement='center' text={entry.weight.toString()} />
                <TableCell
                  align='right'
                  sx={{ display: 'flex', gap: '0.5rem', }}
                >
                  <Button
                    size='small'
                    variant='contained'
                    color='error'
                    onClick={() => setModalState({ type: REDUCER_ACTION_TYPES.OPEN_DELETE, payload: entry })}
                  >
                    Delete
                  </Button>
                  <Button
                    size='small'
                    variant='contained'
                    onClick={() => setModalState({ type: REDUCER_ACTION_TYPES.OPEN_EDIT, payload: entry })}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <CustomTablePagination
                rowsPerPageOptions={[5, 10]}
                colSpan={3}
                count={entries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    'aria-label': 'rows per page',
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Box >
      <DeleteModal
        open={modalState.openDeleteModal}
        data={modalState.data}
        handleClose={() => setModalState({ type: REDUCER_ACTION_TYPES.CLOSE_DELETE, payload: null })}
      />
      <EditModal
        open={modalState.openEditModal}
        data={modalState.data}
        handleClose={() => setModalState({ type: REDUCER_ACTION_TYPES.CLOSE_EDIT, payload: null })}
      />
    </>
  );
}

export default EntriesTable;