import jwt from 'jsonwebtoken';

const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({
      msg: "Authorization token missing"
    });
  }

  const words = token.split(" ");
  const jwtToken = words[1];

  try {
    // Use the JWT_SECRET from the .env file
    const decodedValue = jwt.verify(jwtToken, process.env.jwtSecret);
    console.log(decodedValue.username);

    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated"
      });
    }
  } catch (error) {
    res.status(403).json({
      msg: "Invalid token or signature",
      error: error.message
    });
  }
};

export default adminMiddleware;
