import express from 'express';
import greetingsRouter from './api/greetings.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Use greetings API
app.use('/api/greetings', greetingsRouter);

app.get('/', (req, res) => {
  res.send('Hello, World! API is running');
});

// Catch all other routes for Vercel deployment
app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

export default app;


// // Only listen when not on Vercel
// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server running locally on http://localhost:${PORT}`);
//   });
// }
