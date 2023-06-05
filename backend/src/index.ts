import 'dotenv/config';
import app from './app';
import { PrismaClient } from '@prisma/client';

const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.listen(PORT, () => {
  console.log(`Running server on port: ${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});