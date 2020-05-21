const skillDB = require('../models/devskill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};

function deleteSkill(req, res) {
  skillDB.deleteOne(req.params.id);
  res.redirect('/devskills');
}

function create(req, res) {
  console.log(req.body);
  skillDB.create(req.body);
  res.redirect('/devskills');
}

function index(req, res, next) {
  res.render('devskills/index', {
    devskills: skillDB.getAll()
  })
}

function show(req, res, next) {
  res.render('devskills/show', {
    devskill: skillDB.getOne(req.params.id)
  })
}


function newSkill(req, res) {
  res.render('devskills/new.ejs');
}

