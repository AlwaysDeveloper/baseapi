const { respond } = require("@mvp-rockets/namma-lib/utilities");
const Route = require("../../../../lib/route");
const CreateUserService = require("../services/createUser.service");

new Route({
    path: "/v0/user/create",
    security: false,
    method: "POST",
    handler: async req => {
        const userDetails = req.body;
        const response = await CreateUserService(userDetails);
        return respond(
            response,
            "Successfully user created and logged in.",
            "Not able to create user."
        )
    }
});