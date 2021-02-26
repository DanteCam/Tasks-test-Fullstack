const orm = require("../config/orm");

module.exports = {
  add: (todo, callback) => orm.insertOne("to_dos", todo, callback),
  delete: (id, callback) => orm.deleteOne("to_dos", id, callback),
  getAll: (callback) => orm.selectAllFrom("to_dos", callback),
  update: (todo, callback) => orm.updateOne("to_dos", todo, callback),
  getOne: (id, callback) => orm.selectOne("to_dos", id, callback),
};
