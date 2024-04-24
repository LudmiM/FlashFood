const getAllCustomer = require('./getAllCustomer');
const getCustomer = require('./getCustomer')
const loginCustomer = require("./loginCustomer");
const editCustomer = require('./editCustomer')
const createCustomer = require('./createCustomer')
const deleteCustomer = require('./deleteCustomer')

module.exports = {
  loginCustomer,
  getAllCustomer,
  getCustomer,
  createCustomer,
  editCustomer,
  deleteCustomer,
};
