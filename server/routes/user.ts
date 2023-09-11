import { Router } from "express";
import {
  getUserData,
  getEntries,
  updateUserData,
} from "../controllers/user";

const router = Router();

router.get('/', getUserData);
router.post('/updateUserData', updateUserData);
router.get('/getEntries', getEntries);

export default router;