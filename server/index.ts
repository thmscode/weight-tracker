import dotenv from 'dotenv';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// configurations
dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
const PORT = process.env.PORT ?? 3001;
const MONGO_URL = process.env.MONGO_URL ?? '';

// connecting to mongodb atlas & starting up the server
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('MONGO CONNECTION ESTABLISHED\n');
    console.log('Server is starting up!\n');
  })
  .then(() => app.listen(PORT, (): void => console.log(`Server is listening on Port ${PORT}`)))
  .catch(e => {
    console.log('******************************************************************************************************************************************************');
    console.log('MONGO CONNECTION FAILED\n');
    console.log(e);
    console.log('******************************************************************************************************************************************************');
  });