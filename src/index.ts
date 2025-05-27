// Contains app logic for server functionality
import 'dotenv/config'
import express, { Application } from 'express';
import { heroRouter } from './routes/hero.routes';

const app: Application = express();
const port = parseInt(process.env.PORT || '3000')

app.use('/heroes', heroRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
