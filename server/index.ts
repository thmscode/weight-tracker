import dotenv from 'dotenv';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRouter from './routes/user';
import { validateAccessToken } from './middleware/middleware';

// reading environment variables & using them to initialize variables
dotenv.config();
const app: Express = express();
const PORT = process.env.PORT ?? 3001;
const MONGO_URL = process.env.MONGO_URL ?? '';

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(validateAccessToken);
app.use('/api/user/dashboard', userRouter);

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