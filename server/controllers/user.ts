import { Request, Response } from "express";
import User from "../models/user";

const calculateBMI = (h: number, w: number): number => {
  const BMI = (w / Math.pow(h, 2)) * 703;
  return Math.round(BMI * 10) / 10;
};

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

export const updateUserData = async (req: Request, res: Response) => {
  const { email, id } = req.query;
  const { height, weight } = req.body;
  const bmi = calculateBMI(height, weight);

  try {
    await User.findOneAndUpdate({ email, id }, { height, weight, bmi });
    res.status(200).json({ error: null, msg: 'User updated.' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error.', msg: 'Internal server error.' });
  }
};