const { Pool } = require('pg');

// Your DB configuration obtained from the environment variables
const pool = new Pool({
  user: 'postgres',       // Replace with your postgres username, if different
  host: 'luxia_db',      // Replace with your DB host if different, use the service name if using Docker's internal networking
  database: 'nobi_dev',   // Replace with your actual database name
  password: 'secret1',    // Replace with your actual password
  port: 5432,             // Replace with your actual port if different
});

console.log("try connecting to postgress")

pool.connect((err, client, done) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to the database.');
    // You can execute queries using client here
    // Remember to release the client once you're done:
    // done();
  }
});

module.exports = pool;