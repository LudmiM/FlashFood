/* eslint-disable no-undef */
import "dotenv/config";
const { DB_DATABASE_DEV, DB_USERNAME_DEV, DB_PASSWORD_DEV, DB_HOST_DEV } =
  process.env;

let config;
if (!process.env.NODE_ENV) {
  config = {
    database: DB_DATABASE_DEV,
    username: DB_USERNAME_DEV,
    password: DB_PASSWORD_DEV,
    host: DB_HOST_DEV,
    dialect: "mysql",
    logging: false,
  };
} else {
  config = {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  };
}

export default config;
