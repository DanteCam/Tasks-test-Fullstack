const conn = require("./connection");

module.exports = {
  selectAllFrom: (tbl, callback) => {
    const query = "SELECT * FROM ??";
    conn.query(query, [tbl], callback);
  },

  insertOne: (tbl, obj, callback) => {
    const query = "INSERT INTO ?? SET ?";
    conn.query(query, [tbl, obj], callback);
  },

  updateOne: (tbl, obj, callback) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    conn.query(query, [tbl, obj, obj.id], callback);
  },

  deleteOne: (tbl, id, callback) => {
    const query = "DELETE FROM ?? WHERE id = ?";
    conn.query(query, [tbl, id], callback);
  },
  selectOne: (tbl, id, callback) => {
    const query = "SELECT * FROM ?? WHERE id = ?";
    conn.query(query, [tbl, id], callback);
  },
};
