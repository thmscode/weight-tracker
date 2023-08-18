import { Request, Response } from "express";
import User from "../models/user";

export const getUserData = async (req: Request, res: Response) => {
  const { email, id } = req.query;

  try {
    const user = await User.findOne({ email, id });
    if (user) res.status(200).json({ error: null, data: user });
    else res.status(501).json({ error: 'User could not be found.', data: null });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error.', data: null });
  }
};