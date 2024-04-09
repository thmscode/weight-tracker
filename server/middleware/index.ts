import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import { ObjectSchema } from "yup";

// configurations
dotenv.config();

// auth0 middleware function
export const validateAccessToken = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
});

// yup schema validation
export const validation = (schema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
      await schema.validate(body, { abortEarly: true });
      return next();
    } catch (e) {
      return res.status(400).json({ error: true, data: null, msg: "Request body failed validation" });
    }
  };
