const colors = require("colors");

// Page Not Found Error
// 4xx error codes - 404 (generic)
// Not Found Errors
exports.notFound = (req, res, next) => {
  const error = new Error("Page Not Found");
  error.status = 404;
  next(error);
};

// Internal Server Error Handler
// 5xx error codes - 500 (is used to be precise)
exports.errorHandler = (err, req, res, next) => {
  console.error(`Error Message: ${err.message}`.bgRed.underline);
  console.error(`Error Code: ${err.code}`.bgRed.underline);
  console.error(`Error Stack: ${err.stack}`.red);

  res.status(err.status || 500).json({
    msg: "Internal Server Error",
  });
};
