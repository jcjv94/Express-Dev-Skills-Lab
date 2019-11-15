var skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
  };

function update(req, res) {
  req.body.done = req.body.done === 'on';
  skill.update(req.params.id, req.body);
  res.redirect(`/skills`);
}

function edit(req, res) {
  // const skill = skill.getOne(req.params.id);
  res.render('skills/edit', {
    skill: skill.getOne(req.params.id),
    idx: req.params.id
  });
  // res.redirect('edit page')
}

function deleteSkill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  req.body.done = false;
  skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
}

function index(req, res) {
res.render('skills/index', {
    skills: skill.getAll()
});
}

function show(req, res) {
    res.render('skills/show', {
      skill: skill.getOne(req.params.id),
      skillNum: parseInt(req.params.id) + 1
    });
  }