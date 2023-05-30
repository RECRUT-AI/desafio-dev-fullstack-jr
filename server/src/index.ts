import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    const PORT = 3001;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log(`🔥 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Erro ao conectar banco de dados'));

