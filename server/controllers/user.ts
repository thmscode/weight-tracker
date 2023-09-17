import { Request, Response } from "express";
import User from "../models/user";
import { calculateBMI, formatEntries } from "../utils";

export const getUserData = async (req: Request, res: Response) => {
  const { email, id } = req.query;

  try {
    const user = await User.findOne({ email, id });

    if (user) res.status(200).json({ error: null, data: user });
    else res.status(500).json({ error: 'User could not be found', data: null });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error', data: null });
  }
};


export const updateUserData = async (req: Request, res: Response) => {
  const { email, id } = req.query;
  const { height, weight } = req.body;
  const bmi = calculateBMI(height, weight);

  try {
    await User.findOneAndUpdate({ email, id }, { height, weight, bmi });
    res.status(201).json({ error: null, data: 'User updated' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error', data: null });
  }
};


export const getEntries = async (req: Request, res: Response) => {
  const { email, id } = req.query;

  try {
    const user = await User.findOne({ email, id });

    if (user) {
      const data = formatEntries(user.weight_entries);
      res.status(200).json({ error: null, data });
    }
    else res.status(500).json({ error: 'User could not be found', data: null });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error', data: null });
  }
};


export const deleteEntry = async (req: Request, res: Response) => {
  const { email, id } = req.query;
  const { dateArray, weight } = req.body;
  const date = new Date(dateArray[0], dateArray[1], dateArray[2]);

  try {
    const user = await User.findOne({ email, id });
    if (user) {
      const entries = user.weight_entries;
      const index = entries.findIndex(entry => entry.date.toString() === date.toString() && entry.weight === parseInt(weight));
      if (index >= 0) {
        entries.splice(index, 1);
        user.weight_entries = entries;
        await user.save();
        res.status(200).json({ error: null, data: 'Entry removed' });
      } else res.status(400).json({ error: 'Entry does not exist', data: null });
    } else res.status(500).json({ error: 'User could not be found', data: null });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error', data: null });
  }
};


export const saveNewEntry = async (req: Request, res: Response) => {
  const { email, id } = req.query;
  const weight = parseInt(req.body.weight);
  const dateArray = req.body.date.split('-').map((x: string, i: number) => i === 1 ? parseInt(x) - 1 : parseInt(x));
  const enteredDate = new Date(dateArray[0], dateArray[1], dateArray[2]);

  try {
    const user = await User.findOne({ email, id });

    if (user) {
      const entries = user.weight_entries;
      const found = entries.find((entry) => entry.date.toString() === enteredDate.toString());
      if (found) res.status(400).json({ error: 'Entry already exists', data: null });
      else {
        entries.push({ date: enteredDate, weight });
        entries.sort((a, b) => a.date.getTime() - b.date.getTime());
        user.weight_entries = entries;
        await user.save();
        res.status(201).json({ error: null, data: 'Entry saved' });
      }
    } else res.status(500).json({ error: 'User could not be found', data: null });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error', data: null });
  }
};