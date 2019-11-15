const skills = [
    {skill: 'HTML', complete: true},
    {skill: 'CSS', complete: true},
    {skill: 'JavaScript', complete: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    skills.splice(id, 1, skill);
  }

  function deleteOne(id) {
    skills.splice(id, 1);
  }

  function create(skill) {
    skills.push(skill);
  }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id];
  }