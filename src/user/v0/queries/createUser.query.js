const Models = require("../../../models");

module.exports = class CreateUserQuery {
    constructor({ fullName, userName, email, phone, userRole, country }) {
        this.entity = { fullName, userName, email, phone, userRole, country };
    }

    run() {
        return Models.User.create(this.entity);
    }
}