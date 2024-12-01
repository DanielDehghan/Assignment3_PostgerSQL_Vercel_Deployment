import express from 'express';
import greetingsRouter from './api/greetings.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());


app.use('/api/greetings', greetingsRouter);

app.get('/', (req, res) => {
  res.send('Hello, World! API is running');
});


app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

export default app;



if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}
