import express from 'express';
import passport from '../controllers/passport.js';

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.redirect('/tools')
);

router.get('/logout', (req, res) => {
  req.logout(() => res.redirect('/'));
});

export default router;

