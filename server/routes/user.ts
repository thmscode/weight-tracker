import { Router } from "express";
import {
  getUserData,
  updateUserData,
} from "../controllers/user";

const router = Router();

router.get('/', getUserData);
router.post('/updateUserData', updateUserData);

export default router;