const { pool } = require('../services/database');

module.exports.signin = (id, password, callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      callback(false);
      return;
    }
    const query = 'SELECT COUNT(*) AS count FROM users WHERE user_id = ? AND user_password=?;';
    connection.query(query, [id, password], (queryErr, result) => {
      connection.release();

      if (err) {
        console.log(queryErr);
        callback(false);
      }
      if (result[0].count === 0) {
        callback(false);
      } else {
        callback(result);
      }
    });
  });
};
