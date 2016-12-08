// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || "development"
    
  },

  production: {
    client: 'postgresql',
    connection: process.env.DEPLOYED_DATABASE_URL || "production"
  }

}
