require("dotenv").config();
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

module.exports = CREDENTIALS;
