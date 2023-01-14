const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const http = require("http");
const config = require("config");
const Router = require("./lib/router");
const ApiError = require("@mvp-rockets/namma-lib/src/lib/utilities/api-error");
const ValidationError = require("./lib/validationerror");

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

Router.setApp(app, {
    route: {
        includes: ['src']
    }
});

app.use((request, response, next) => {
    next(new ApiError("NOT_FOUND", "Resource not found!", 404));
});

app.use((error, request, response, next) => {
    if (error instanceof ApiError) {
        if (error.code) {
            response.status(error.code);
        }

        response.send({
            status: false,
            error: "API",
            message: error.errorMessage
        });
    } else if (error instanceof ValidationError) {
        response.send({
            status: false,
            errorType: "validation",
            message: error.errorMessage
        });
    } else {
        response.status(501);
        response.send({
            status: false,
            errorType: "unhandled",
            message: "Something went wrong!",
        });
    }
});

process.on("unhandledRejection", (error) => {
    logError("unhandledRejection", getErrorJSONData(error));
});

process.on("uncaughtException", (error) => {
    logError("uncaughtException", getErrorJSONData(error));
});

const getErrorJSONData = (error) => {
    return {
        message: error.message,
        name: error.name,
        stackTrace: error.stack,
    };
};

http
    .createServer(app)
    .listen(
        config.PORT,
        () => console.log(`Express server listening on port ${config.PORT}`)
    );