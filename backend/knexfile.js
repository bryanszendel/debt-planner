// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      "postgres://postgres:postgres@127.0.0.1:54322/debtplanner",
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migration",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migration",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migration",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
