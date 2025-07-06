require('dotenv').config(); // Carga automáticamente las variables desde el archivo .env

module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },

  mysql: {
    host: process.env.MAYSQL_HOST || 'localhost',
    user: process.env.MAYSQL_USER || 'root',
    password: process.env.MAYSQL_PASSWORD || '',
    database: process.env.MAYSQL_DB || 'ejemplo',
  }
};
