import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const userData = await User.findOne({ _id: isVerified.id }).select({
        password: 0,
      });

      req.user = userData;
      req.token = token;
      req.userID = userData._id;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized" });
    }

    if (!token) {
      res.status(401).json({ message: "No token provided" });
    }
  }
};
