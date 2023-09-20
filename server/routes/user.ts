import { Router } from "express";
import {
  deleteEntry,
  getUserData,
  getEntries,
  saveNewEntry,
  updateEntry,
  updateUserData,
} from "../controllers/user";
import { validation } from "../middleware/middleware";
import {
  deleteEntrySchema,
  entrySchema,
  updateUserSchema
} from "../yup-schemas";

const router = Router();

router.get('/', getUserData);
router.post('/updateUserData', validation(updateUserSchema), updateUserData);
router.get('/getEntries', getEntries);
router.delete('/deleteEntry', validation(deleteEntrySchema), deleteEntry);
router.post('/newEntry', validation(entrySchema), saveNewEntry);
router.post('/updateEntry', validation(entrySchema), updateEntry);

export default router;