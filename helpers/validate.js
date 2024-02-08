const Validator = require('validatorjs');
// why doesn't the line above work? "Error: Cannot find module 'validatorjs'"
const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages)
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false))
};

module.exports = validator;