import { Router } from "express";
import {
  deleteEntry,
  getUserData,
  getEntries,
  saveNewEntry,
  updateUserData,
} from "../controllers/user";

const router = Router();

router.get('/', getUserData);
router.post('/updateUserData', updateUserData);
router.get('/getEntries', getEntries);
router.delete('/deleteEntry', deleteEntry);
router.post('/newEntry', saveNewEntry);

export default router;