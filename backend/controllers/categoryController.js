// 📁 controllers/categoryController.js
// (Optional placeholder for future logic abstraction)

// 📁 middleware/errorMiddleware.js
module.exports = (err, req, res, next) => {
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(status);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
