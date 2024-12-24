const colors = require("colors");

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const color = methodColors[req.method] || white;

  console.log(
    `REQUEST LOG-`.bgMagenta +
      `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
        color
      ]
  );
  next();
};

module.exports = logger;
