const router = require("./router");

module.exports = class Route {
    constructor({ path, security = false, auth = false, handler, method = "GET" }) {
        this.details = {
            path, security, auth, handler, method
        };
        this.bindToRouter();
    }

    bindToRouter() {
        try {
            const newRouter = this.details.security ? router.withSecurity() : router.withOutSecurity();
            const newRouterWithAuth = this.details.auth ? newRouter.authorize(this.details.auth) : newRouter.noAuth();
            newRouterWithAuth[this.details.method.toLocaleLowerCase()](this.details.path, this.details.handler).bind();
        } catch (error) {
            console.error(error);
        }
    }
};