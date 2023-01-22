const validate = require("@mvp-rockets/namma-lib/src/lib/validations/validate");
const { isNonEmpty, isString, isMobile, isNumeric } = require("../../../lib/validators");

module.exports = async data => validate(
    {
        fullName: [
            [isNonEmpty, "Full name is required!"],
            [isString, "Full name must be string!"]
        ],
        userName: [
            [isNonEmpty, "User name is required!"],
            [isString, "User name must be string!"]
        ],
        email: [
            [isNonEmpty, "Email is required!"],
            [isString, "Email must be string!"]
        ],
        phone: [
            [isNonEmpty, "Phone is required!"],
            [isMobile, "Phone number is not valid"]
        ],
        userRole: [
            [isNonEmpty, "User role is required!"],
            [isNumeric, "User role must be number!"]
        ],
        country: [
            [isNonEmpty, "Country is required!"],
            [isNumeric, "Country must be number!"]
        ]
    },
    data
);