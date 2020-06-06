const todoDB = require('../models/todos');

module.exports = {
  index,
 
  create,
  delete: deleteSkill,
};

function deleteSkill(req, res) {
  todoDB.deleteOne(req.params.id);
  res.redirect('/');
}

function create(req, res) {
  console.log(req.body);
  todoDB.create(req.body);
  res.redirect('/');
}

function index(req, res, next) {
  res.render('todos/index', {
    todos: todoDB.getAll()
  })
}

