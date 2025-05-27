// Contains app logic for server functionality

import express, { Application } from 'express';
import { heroRouter } from './routes/hero.routes';

const app: Application = express();
const port = process.env.PORT;

// app.get('/', (req, res) => {
//   let heroName = req.query.heroName;
//   res.send(`Hero Name: ${heroName}`);
// });

// app.use('/D.Va', getHero('D.Va'));
// app.use('/Reaper', getHero('Reaper'));

app.use('/heroes', heroRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});