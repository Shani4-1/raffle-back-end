require('dotenv').config();
const pgp = require('pg-promise')();

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
    throw new Error('No Connection')
  }

const cn = {
    connectionString,
    allowExitOnIdle: true,
    max: 30,
  };

  const db = pgp(cn);

module.exports = db;
