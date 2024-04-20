import { sequelize } from "../database/index.js";
const { Commerce } = sequelize.models;

const insertCommerce = (commerce) => {
  return Commerce.create(commerce);
};

const retrieveCommerces = () => {
  return Commerce.findAll();
};

const retrieveCommerce = (id) => {
  return `Commerce ${id} retrieved`;
};

const updateCommerce = (id, commerce) => {
  return `Commerce ${id} updated`;
};

const removeCommerce = (id) => {
  return `Commerce ${id} deleted`;
};

export {
  insertCommerce,
  retrieveCommerces,
  retrieveCommerce,
  updateCommerce,
  removeCommerce,
};
