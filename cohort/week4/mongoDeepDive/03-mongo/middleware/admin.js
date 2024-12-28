import { Admin } from '../db/index.js';

const adminMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  Admin.findOne({ username, password })
    .then((value) => {
      if (value) {
        next();
      } else {
        res.status(403).json({ msg: "Admin doesn't exist" });
      }
    })
    .catch((error) => {
      res.status(500).json({ msg: 'Server error', error: error.message });
    });
};

export default adminMiddleware;
