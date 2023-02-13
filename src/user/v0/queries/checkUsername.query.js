const Models = require("../../../models");

module.exports = class CheckUsernameQuery {
    constructor(username) {
        this.username = username;
    }

    run() {
        return new Promise((resolve, reject) => {
            try {
                Models.User
                    .findAll({
                        where: {
                            userName: this.username,
                            status: 1
                        }
                    })
                    .then(entities => resolve(entities.length === 0 ? true : false))
                    .catch(error => resolve(error));
            } catch (error) {
                reject(error);
            }
        });
    }
}