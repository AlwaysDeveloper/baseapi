const composeResult = require("@mvp-rockets/namma-lib/src/lib/utilities/compose-result");

const LoginValidation = require("../validations/login.validation");

module.exports = async ({email, password}) => composeResult(
    LoginValidation
)({email, password})