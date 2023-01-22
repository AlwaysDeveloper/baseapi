const validate = require("@mvp-rockets/namma-lib/src/lib/validations/validate");
const { isNonEmpty, isString } = require("../../../lib/validators");

module.exports = async data => {
    return validate(
    {
        userNameToCheck: [
            [isNonEmpty, "Username is required to check!"],
            [isString, "Username must be string!"]
        ]
    },
    data
)};