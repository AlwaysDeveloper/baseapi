const validate = require("@mvp-rockets/namma-lib/src/lib/validations/validate");
const { isNonEmpty, isEmail } = require("../../../lib/validators");

module.exports = async data => validate(
    {
        email: [
            [isNonEmpty, "email is required to login."],
            [isEmail, "email is not valid."]
        ],
        password: [
            [isNonEmpty, "password is required to login."]
        ]
    },
    data
);