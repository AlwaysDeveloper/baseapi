const respond = require("@mvp-rockets/namma-lib/src/lib/utilities/respond");
const Route = require("../../../lib/route");
const LoginService = require("../services/login.service");

new Route({
    path: "/v0/user/login",
    security: false,
    method: "POST",
    handler: async req => {
        const credentials = req.body;
        const response = await LoginService(credentials);
        return respond(
            response,
            "Successfully logged in.",
            "Not able to login. Wrong credentials!"
        );
    }
});