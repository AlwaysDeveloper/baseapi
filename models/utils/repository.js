const Result = require('folktale/result');

const execute = async query => new Promise((resolve) => {
    query
        .run()
        .then((data) => {
            resolve(Result.Ok(data));
        })
        .catch((error) => {
            console.log("Repository failed on execute", { query: query.constructor.name, error: error });
            resolve(Result.Error(error));
        });
});

module.exports = {
    execute,
    findOne: execute,
    findAll: execute,
    create: execute,
    update: execute,
    bulkCreate: execute,
}