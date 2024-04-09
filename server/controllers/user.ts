import { Request, Response } from "express";
import User from "../models/user";
import { arrayToDate, calculateBMI, formatEntries } from "../utils";

export const getUserData = async (req: Request, res: Response) => {
  const { email, id } = req.query;

  try {
    const user = await User.findOne({ email, id });

    if (user)
      res.status(200).json({ error: false, data: user, msg: "User successfully loaded." });
    else
      res.status(500).json({ error: true, data: null, msg: "User could not be found." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: true, data: null, msg: "Internal server error. Please refresh." });
  }
};

export const updateUserData = async (req: Request, res: Response) => {
  const { email, id } = req.query;
  const { height, weight } = req.body;
  const bmi = calculateBMI(height, weight);

  try {
    await User.findOneAndUpdate({ email, id }, { height, weight, bmi });
    res.status(201).json({ error: false, data: null, msg: "Data successfully updated." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: true, data: null, msg: "Internal server error. Please refresh." });
  }
};

export const getEntries = async (req: Request, res: Response) => {
  const { email, id } = req.query;

  try {
    const user = await User.findOne({ email, id });

    if (user) {
      const data = formatEntries(user.weight_entries);
      res.status(200).json({ error: false, data, msg: "Weight entries loaded." });
    } else
      res.status(500).json({ error: true, data: null, msg: "User could not be found." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: true, data: null, msg: "Internal server error. Please refresh." });
  }
};

export const deleteEntry = async (req: Request, res: Response) => {
  const { email, id } = req.query;
  const date = arrayToDate(req.body.dateArray);

  try {
    const user = await User.findOne({ email, id });
    if (user) {
      const entries = user.weight_entries;
      const index = entries.findIndex(
        (entry) =>
          entry.date.toString() === date.toString() &&
          entry.weight === parseInt(req.body.weight)
      );
      if (index >= 0) {
        entries.splice(index, 1);
        user.weight_entries = entries;
        await user.save();
        res.status(200).json({ error: false, data: null, msg: "Entry deleted." });
      } else
        res.status(400).json({ error: true, data: null, msg: "Entry does not exist." });
    } else
      res.status(500).json({ error: true, data: null, msg: "User could not be found." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: true, data: null, msg: "Internal server error. Please refresh." });
  }
};

export const saveNewEntry = async (req: Request, res: Response) => {
  const { email, id } = req.query;
  const enteredDate = arrayToDate(req.body.dateArray);

  try {
    const user = await User.findOne({ email, id });

    if (user) {
      const entries = user.weight_entries;
      const found = entries.find(
        (entry) => entry.date.toString() === enteredDate.toString()
      );
      if (found)
        res.status(400).json({ error: true, data: null, msg: "Entry already exists for that date." });
      else {
        entries.push({ date: enteredDate, weight: req.body.weight });
        entries.sort((a, b) => a.date.getTime() - b.date.getTime());
        user.weight_entries = entries;
        await user.save();
        res.status(201).json({ error: false, data: null, msg: "Entry successfully saved." });
      }
    } else
      res.status(500).json({ error: true, data: null, msg: "User could not be found." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: true, data: null, msg: "Internal server error. Please refresh." });
  }
};

export const updateEntry = async (req: Request, res: Response) => {
  const { email, id } = req.query;
  const targetDate = arrayToDate(req.body.dateArray);
  const newWeight = parseInt(req.body.weight);

  try {
    const user = await User.findOne({ email, id });

    if (user) {
      user.weight_entries.forEach((entry) => {
        if (entry.date.toString() === targetDate.toString())
          entry.weight = newWeight;
      });
      await user.save();
      res.status(201).json({ error: false, data: null, msg: "Entry successfully updated." });
    } else
      res.status(500).json({ error: true, data: null, msg: "User could not be found." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: true, data: null, msg: "Internal server error. Please refresh." });
  }
};
