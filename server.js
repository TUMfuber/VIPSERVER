import express from 'express';
import session from 'express-session';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';
import passport from './controllers/passport.js'; // must end in .js
import authRoutes from './routes/auth.js';
import toolsRoutes from './routes/tools.js';

dotenv.config();

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/tools', toolsRoutes);

app.get('/', (req, res) => {
  res.send('Home Page');
});

const options = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem'),
};

https.createServer(options, app).listen(3000, () => {
  console.log('Server running at https://localhost:3000');
});

