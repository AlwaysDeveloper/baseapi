const { composeResult } = require("@mvp-rockets/namma-lib/utilities");
const CreateUserValidator = require("../validations/createUser.validation");
const { execute } = require("../../../../models");
const CreateUserQuery = require("../queries/createUser.query");

module.exports = async (userData) => composeResult(
    async (user) => {
        const result = await token.generate({ id: user.id });
        return whenResult(
            (token) => Result.Ok({ ...user, token }),
            (error) => Result.Error(error)
        )(result);
    },
    () => execute.create(new CreateUserQuery(userData)),
    CreateUserValidator
)(userData);