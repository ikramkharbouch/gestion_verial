const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  password: 'michelin6767',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'verial'
});

const getVerialUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }



module.exports = {
    // includes db methods for extracting, inserting, modifying or deleting
    getVerialUsers
};