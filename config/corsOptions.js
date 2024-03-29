const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  // origin:'https://react-auth-signup-login.netlify.app',
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
