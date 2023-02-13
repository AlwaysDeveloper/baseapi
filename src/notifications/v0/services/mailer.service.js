const Result = require("folktale/result");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text");

module.exports = ({ to, subject, html }) => new Promise((resolve) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "",
            port: "",
            secure: false,
            auth: {
                user: "",
                pass: ""
            }
        }).use("compile", htmlToText);

        transporter
            .sendMail({
                from: "",
                to,
                subject,
                html
            })
            .then(response => Result.Ok(response))
            .catch(error => Result.Error(error.message));
    } catch (error) {
        resolve(Result.Error(error.message));
    }
});