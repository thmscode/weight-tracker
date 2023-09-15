import { Router } from "express";
import {
  deleteEntry,
  getUserData,
  getEntries,
  updateUserData,
} from "../controllers/user";

const router = Router();

router.get('/', getUserData);
router.post('/updateUserData', updateUserData);
router.get('/getEntries', getEntries);
router.delete('/deleteEntry', deleteEntry);

export default router;