const devskills = [
    {id: 1, skill: 'HTML', learned: true},
    {id: 2, skill: 'CSS', learned: false},
    {id: 3, skill: 'Javascript', learned: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    // Find the index based on the id of the skill object
    const idx = devskills.findIndex(skill => skill.id ===parseInt(id));
    devskills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.learned = false;
    devskills.push(skill);
  }
  
  function getAll() {
    return devskills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return devskills.find(skill => skill.id === parseInt(id));
  }