/* eslint-disable no-undef */
import Sequelize from "sequelize";
import config from "./config.js";

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

import * as url from "url";
const path_db = `${url.fileURLToPath(new URL(".", import.meta.url))}`;
const PATH_MODELS = path_db + "models";

import { readdirSync } from "fs";
readdirSync(PATH_MODELS).forEach((fileName) => {
  const name = fileName.split(".")[0]; 
  import(`./models/${name}.js`).then((model) => {
    model.default(sequelize);
  });
});
