const respond = require("@mvp-rockets/namma-lib/src/lib/utilities/respond");
const Route = require("../../../lib/route");
const CheckUserNameToUniqueService = require("../services/checkUsernameToUnique.service");

new Route({
    path: "/v0/user/:username/unique",
    method: "GET",
    security: false,
    handler: async req => {
        const { username } = req.params;
        const response = await CheckUserNameToUniqueService(username);
        return respond(
            response,
            "Successfully checked the username.",
            "Not able to check username!"
        );
    }
});