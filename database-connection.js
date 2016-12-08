const knex = require("knex");
const knexenvironments = require("./knexfile");
const environment = process.env.NODE_ENV || "development";
const config = knexenvironments[environment];
const knexconfig = knex(config);

module.exports = knexconfig;
