const toDos = [];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    // Find the index based on the id of the skill object
    const idx = toDos.findIndex(toDo => toDo.id ===parseInt(id));
    toDos.splice(idx, 1);
  }

  function create(toDo) {
    toDo.id = Date.now() % 1000000;
    toDos.push(toDo);
  }
  
  function getAll() {
    return toDos;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return toDos.find(toDo => toDo.id === parseInt(id));
  }