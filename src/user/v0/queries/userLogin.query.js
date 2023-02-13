const crypto = require("crypto");
const Models = require("../../../models");

module.exports = class UserLoginQuery {
    constructor(unique, password) {
        this.unique = unique;
        this.password = password;
    }

    run() {
        return Models.User.findOne({
            where: {
                [Models.Sequelize.Op.or]: [
                    {
                        userName: this.unique
                    },
                    {
                        email: this.unique
                    },
                    {
                        phone: this.unique
                    }
                ],
                password: crypto.createHash("md5").update(this.password).digest("hex")
            }
        });
    }
}