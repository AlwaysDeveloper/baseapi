const { composeResult, whenResult } = require("@mvp-rockets/namma-lib/utilities");
const { execute } = require("../../../../models");
const GetEmailOrMobileByUserId = require("../queries/getemailormobile.query");
const mailerService = require("../../../notifications/v0/services/mailer.service");

module.exports = async (userId, isOnMobile) => composeResult(
    (user) => {
        mailerService({
            to: user.email,
            subject: "Account Verification",
        })
    },
    () => execute.findOne(new GetEmailOrMobileByUserId(userId, isOnMobile ? "email" : "mobile"))
)()