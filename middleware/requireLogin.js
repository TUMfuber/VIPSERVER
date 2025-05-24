// middleware/requireLogin.js
export default function requireLogin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google');
}

