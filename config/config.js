require('dotenv').config();

const port = process.env.PORT;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

module.exports = {
  port: port,

  database: {
    host: dbHost,
    port: dbPort,
    name: dbName,
    user: dbUser,
    password: dbPassword,
  },


  apiKey: apiKey,
  secretKey: secretKey,
};
