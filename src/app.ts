// Contains app logic for server functionality

import express, { Application } from 'express';

const app: Application = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript in Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});