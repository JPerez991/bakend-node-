require('dotenv').config(); // Carga automáticamente las variables desde el archivo .env

module.exports = {
  app: {
    port: process.env.PORT || 4000,
  }
};
