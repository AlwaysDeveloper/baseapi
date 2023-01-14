const R = require("ramda");
const Result = require('folktale/result');
const ValidationError = require('./validationerror');

module.exports = {
    isNumeric: R.compose(R.equals("Number"), R.type),
    isNumericString: value => !R.compose(R.equals("Number"), R.type)(value),
    isNonEmpty: R.anyPass([R.isEmpty, R.isNil]),
    isString: R.compose(R.equals("String"), R.type),
    isMinLength: R.curry((length, value) => R.lte(length, R.length(value))),
    isMaxLength: R.curry((length, value) => R.gte(length, R.length(value))),
    isMaxThen: R.curry((threshold, value) => R.gte(threshold, value)),
    isMinThen: R.curry((threshold, value) => R.lte(threshold, value)),
    optional: R.curry((validator, value) => value !== undefined ? validator(value) : true),
    isEmail: R.anyPass([(value) => R.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, value)]),
    isMatchPattern: R.curry((pattern, value) => R.test(pattern, value))
}

