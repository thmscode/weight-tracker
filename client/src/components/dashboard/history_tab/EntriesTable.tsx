import { useState } from "react";
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
import EditEntryModal from "./EditEntryModal";

type Modal = {
  open: boolean,
  data: Entry | null
}

const EntriesTable: React.FC<{ entries: Entry[] }> = ({ entries }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [openDeleteModal, setOpenDeleteModal] = useState<Modal>({ open: false, data: null });
  const [openEditModal, setOpenEditModal] = useState<Modal>({ open: false, data: null });

  const handleOpenDeleteModal = (entry: Entry): void => setOpenDeleteModal({ open: true, data: entry });
  const handleCloseDeleteModal = (): void => setOpenDeleteModal({ open: false, data: null });

  const handleOpenEditModal = (entry: Entry): void => setOpenEditModal({ open: true, data: entry });
  const handleCloseEditModal = (): void => setOpenEditModal({ open: false, data: null });

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box py='1rem' px='12rem'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '1.25rem' }}>Date</TableCell>
              <TableCell align='center' sx={{ fontSize: '1.25rem' }}>Weight</TableCell>
              <TableCell align='right' sx={{ fontSize: '1.25rem' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? entries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : entries
            ).map((entry, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontSize: '1.125rem' }}>{entry.date.toString()}</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.125rem' }}>{entry.weight}</TableCell>
                <TableCell align='right' sx={{ display: 'flex', gap: '0.5rem' }}>
                  <Button variant='contained' color='error' onClick={() => handleOpenDeleteModal(entry)}>Delete</Button>
                  <Button variant='contained' onClick={() => handleOpenEditModal(entry)}>Edit</Button>
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
      </Box>
      <DeleteModal
        state={openDeleteModal}
        handleClose={handleCloseDeleteModal}
      />
      <EditEntryModal
        state={openEditModal}
        handleClose={handleCloseEditModal}
      />
    </>
  );
}

export default EntriesTable;