import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorMiddleware from './middlewares/errorMiddleware';
import petRoute from './routes/pets.route';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(petRoute);
app.use(errorMiddleware);


export default app;