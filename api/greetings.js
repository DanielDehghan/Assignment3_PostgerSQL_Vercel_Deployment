import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Greet endpoint
router.post('/greet', async (req, res) => {
  const { timeOfDay, language, tone } = req.body;

  try {
    const query = `
      SELECT greetingMessage, tone 
      FROM Greetings 
      WHERE LOWER(timeOfDay) = LOWER($1)
        AND LOWER(language) = LOWER($2)
        AND LOWER(tone) = LOWER($3)
    `;
    const values = [timeOfDay, language, tone];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).send({
        error: `Greeting not found. Please check your inputs: timeOfDay=${timeOfDay}, language=${language}, tone=${tone}`,
      });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send({ error: 'Database error occurred' });
  }
});

// Get all times of day
router.get('/getAllTimesOfDay', async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT timeOfDay FROM Greetings');
    res.json(result.rows.map((row) => row.timeofday));
  } catch (err) {
    console.error('Error in getAllTimesOfDay:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
});

// Get supported languages
router.get('/getSupportedLanguages', async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT language FROM Greetings');
    res.json(result.rows.map((row) => row.language));
  } catch (err) {
    console.error('Error in getSupportedLanguages:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
});

export default router;
