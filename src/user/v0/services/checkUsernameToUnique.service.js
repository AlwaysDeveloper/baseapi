const { composeResult } = require("@mvp-rockets/namma-lib/utilities");
const CheckUserNameValidator = require("../validations/checkUsername.validation");
const { execute } = require("../../../../models");
const CheckUsernameQuery = require("../queries/checkUsername.query");

module.exports = async userName => composeResult(
    () => execute.execute(new CheckUsernameQuery(userName)),
    CheckUserNameValidator
)({ userNameToCheck: userName })