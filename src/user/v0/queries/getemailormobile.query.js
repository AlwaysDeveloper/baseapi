const Model = require("../../../models");

module.exports = class GetEmailOrMobileByUserId {
    constructor(userId, emailOrMobile) {
        this.details = {
            userId,
            emailOrMobile
        };
    }

    run() {
        return Model.User.findOne({
            attributes: [emailOrMobile],
            where: {
                id: this.details.userId
            }
        });
    }
};