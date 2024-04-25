//await sendEmail(res, email, 'Welcome to Klinika Merchacovz', templatePatientRegister(fullname))
const cancel = require('./cancel')
const create = require('./create')

module.exports = {
  create,
  cancel,
};
