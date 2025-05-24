// routes/tools.js
import express from 'express';
import requireLogin from '../middleware/requireLogin.js';

const router = express.Router();

// Example protected tool route
router.get('/', requireLogin, (req, res) => {
  res.send(`Welcome to the tools page, ${req.user.displayName}`);
});

// You can add more specific tool routes here
router.get('/some-tool', requireLogin, (req, res) => {
  res.send('This is a specific tool.');
});

export default router;

