import express from 'express';
import 'express-async-errors';
import cors from 'cors';
// import petRoutes from './routes/pets';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

export default app;