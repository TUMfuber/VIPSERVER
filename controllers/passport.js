// controllers/passport.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Load environment variables (make sure dotenv is imported somewhere early like in server.js)
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
} = process.env;

console.log('Google Client ID:', GOOGLE_CLIENT_ID); // Debug

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

export default passport;

