const { respond } = require("@mvp-rockets/namma-lib/utilities");
const Route = require("../../../../lib/route");
const SendVerificationService = require("../services/sendverificationcode.service")

new Route({
    path: "/v0/user/:userId/verification",
    method: "GET",
    security: false,
    handler: async req => {
        const { userId } = req.params;
        const response = await SendVerificationService(userId, "email");
        return respond(
            response,
            "Successfully send the verification code.",
            "Not able to send verification code."
        );
    }
});