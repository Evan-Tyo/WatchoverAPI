// Contains app logic for server functionality

import express, { Application } from 'express';
import { heroRouter } from './routes/router';

const app: Application = express();
const port = 3000;

// app.get('/', (req, res) => {
//   let heroName = req.query.heroName;
//   res.send(`Hero Name: ${heroName}`);
// });

app.use('/D.Va', heroRouter('D.Va'));
app.use('/Reaper', heroRouter('Reaper'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});