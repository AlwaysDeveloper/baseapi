const { token } = require("@mvp-rockets/namma-lib");
const { composeResult, whenResult } = require("@mvp-rockets/namma-lib/utilities");
const Result = require("folktale/result");
const { execute } = require("../../../models");
const UserLoginQuery = require("../queries/userLogin.query");
const LoginValidation = require("../validations/login.validation");

module.exports = async ({ unique, password }) => composeResult(
    async (user) => {
        if (user === null) {
            return Result.Error("Login credential are wrong!");
        }
        const result = await token.generate({ id: user.id });
        return whenResult(
            (token) => Result.Ok({ ...user, token }),
            (error) => Result.Error(error)
        )(result);
    },
    () => execute.findOne(new UserLoginQuery(unique, password)),
    LoginValidation
)({ email, password });