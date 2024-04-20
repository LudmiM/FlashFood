const path = require('path');

const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

//____
const { editCommerce } = require("./editCommerce");
const { loginCommerce } = require("./loginCommerce");
const { createCommerce } = require("./registerCommerce");
const { deleteCommerce } = require("./deleteCommerce");
const { getCommerce } = require("./getCommerce");
const { changePasswordCommerce } = require("./changePasswordCommerce");

module.exports = {
  editCommerce,
  loginCommerce,
  createCommerce,
  deleteCommerce,
  getCommerce,
  changePasswordCommerce
};
