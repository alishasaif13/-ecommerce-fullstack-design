// 📁 config/config.js
module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://E-COMM:eCkH8bMIUPAUyc6R@ecommerce.lnjrsth.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key_here_change_in_production',
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development'
};
